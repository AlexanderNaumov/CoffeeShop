package me.haymob.coffeeshopsdk.customer

import kotlinx.serialization.Serializable
import me.haymob.coffeeshopsdk.core.*
import me.haymob.coffeeshopsdk.core.argsOf
import me.haymob.coffeeshopsdk.core.http
import me.haymob.coffeeshopsdk.core.mutation
import me.haymob.coffeeshopsdk.core.of
import me.haymob.coffeeshopsdk.entities.UserViewer
import me.haymob.coffeeshopsdk.entities.userViewerField

@Serializable
private data class LoginMutation(val logIn: LogIn?) {
    @Serializable
    data class LogIn(val viewer: UserViewer): GQLObject
}

fun login(email: String, password: String) = http(mutation<LoginMutation> {
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

fun logout() = http(mutation<LogoutMutation> {
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
    secondName: String,
    email: String,
    password: String
) = http(mutation<SignupMutation> {
    field(
        SignupMutation::signUp,
        "input" of argsOf(
            "fields" of argsOf(
                "firstName" of firstName,
                "secondName" of secondName,
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