package me.haymob.coffeeshopsdk.entities

import kotlinx.serialization.Serializable
import me.haymob.coffeeshopsdk.core.*

@Serializable
data class Price(
    val value: Double,
    val currency: String
): GQLObject