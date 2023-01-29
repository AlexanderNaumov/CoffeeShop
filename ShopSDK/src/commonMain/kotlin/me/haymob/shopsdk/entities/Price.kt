package me.haymob.shopsdk.entities

import kotlinx.serialization.Serializable
import me.haymob.shopsdk.core.*

@Serializable
data class Price(
    val value: Double,
    val currency: String = ""
): GQLObject