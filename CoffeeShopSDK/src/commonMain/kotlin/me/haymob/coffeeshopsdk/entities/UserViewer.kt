package me.haymob.coffeeshopsdk.entities

import kotlinx.serialization.Serializable
import me.haymob.coffeeshopsdk.core.GQLObject
import me.haymob.coffeeshopsdk.core.field

@Serializable
data class UserViewer(
    val sessionToken: String,
    val user: User
): GQLObject

internal val userViewerField = field<UserViewer> {
    field(UserViewer::sessionToken)
    field(UserViewer::user, userField)
}


