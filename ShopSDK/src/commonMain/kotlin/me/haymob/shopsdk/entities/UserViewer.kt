package me.haymob.shopsdk.entities

import kotlinx.serialization.Serializable
import me.haymob.shopsdk.core.GQLObject
import me.haymob.shopsdk.core.field

@Serializable
data class UserViewer(
    val sessionToken: String,
    val user: User
): GQLObject

internal val userViewerField = field {
    field(UserViewer::sessionToken)
    field(UserViewer::user, userField)
}


