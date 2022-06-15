package me.haymob.coffeeshopsdk.customer

import kotlinx.coroutines.flow.flatMapMerge
import kotlinx.coroutines.flow.flowOf
import kotlinx.serialization.Serializable
import me.haymob.coffeeshopsdk.config
import me.haymob.coffeeshopsdk.core.*
import me.haymob.coffeeshopsdk.core.argsOf
import me.haymob.coffeeshopsdk.core.http
import me.haymob.coffeeshopsdk.core.mutation
import me.haymob.coffeeshopsdk.core.of
import me.haymob.coffeeshopsdk.entities.*
import me.haymob.coffeeshopsdk.entities.userField
import me.haymob.coffeeshopsdk.entities.userViewerField

@Serializable
private data class LoginMutation(val logIn: LogIn?) {
    @Serializable
    data class LogIn(val viewer: UserViewer): GQLObject
}

fun login(email: String, password: String) = http(mutation {
    field(
        LoginMutation::logIn,
        "input" of argsOf(
            "username" of email.lowercase(),
            "password" of password
        )
    ) {
        field(LoginMutation.LogIn::viewer, userViewerField)
    }
}).decode<LoginMutation>().tryMap { it.logIn?.viewer }

@Serializable
private data class LogoutMutation(val logOut: LogOut?) {
    @Serializable
    data class LogOut(val ok: Boolean): GQLObject
}

fun logout() = http(mutation {
    field(
        LogoutMutation::logOut,
        "input" of argsOf()
    ) {
        field(LogoutMutation.LogOut::ok)
    }
}).decode<LogoutMutation>().tryMap { it.logOut?.ok }

@Serializable
private data class SignupMutation(val signUp: SignUp?) {
    @Serializable
    data class SignUp(val viewer: UserViewer): GQLObject
}

fun signup(
    firstName: String,
    lastName: String,
    email: String,
    password: String
) = http(mutation {
    field(
        SignupMutation::signUp,
        "input" of argsOf(
            "fields" of argsOf(
                "firstName" of firstName,
                "lastName" of lastName,
                "email" of email.lowercase(),
                "username" of email.lowercase(),
                "emailVerified" of true,
                "password" of password
            )
        )
    ) {
        field(SignupMutation.SignUp::viewer, userViewerField)
    }
}).decode<SignupMutation>().tryMap { it.signUp?.viewer }


@Serializable
private data class SessionsQuery(val sessions: NodeContainer<Session>?) {
    @Serializable
    data class Session(val user: User): GQLObject
}

fun user(token: String = config.sessionToken ?: "") = http(query {
    field(
        SessionsQuery::sessions,
        "where" of argsOf(
            "sessionToken" of argsOf(
                "equalTo" of token
            )
        )
    ) {
        field(NodeContainer<SessionsQuery.Session>::edges) {
            field(NodeContainer.Node<SessionsQuery.Session>::node) {
                field(SessionsQuery.Session::user, userField)
            }
        }
    }
}).decode<SessionsQuery>().tryMap { it.sessions?.edges?.firstOrNull()?.node?.user }

@Serializable
private data class UpdateUserMutation(val updateUser: UpdateUser?) {
    @Serializable
    data class UpdateUser(val user: User): GQLObject
}

fun updateUser(
    id: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String?) = http(mutation {
    val args = mutableListOf(
        "firstName" of firstName,
        "lastName" of lastName,
        "email" of email.lowercase(),
        "username" of email.lowercase(),
        "emailVerified" of true
    )
    if (password != null && password.isNotEmpty()) {
        args.add("password" of password)
    }
    field(
        UpdateUserMutation::updateUser,
        "input" of argsOf(
            "id" of id,
            "fields" of argsOf(args)
        )
    ) {
        field(UpdateUserMutation.UpdateUser::user, userField)
    }
}).decode<UpdateUserMutation>().tryMap { it.updateUser?.user }.flatMapMerge { user ->
    if (password != null && password.isNotEmpty()) {
        login(email, password)
    } else {
        flowOf(UserViewer("", user))
    }
}