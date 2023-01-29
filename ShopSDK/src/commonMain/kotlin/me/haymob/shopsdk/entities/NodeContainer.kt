package me.haymob.shopsdk.entities

import kotlinx.serialization.Serializable
import me.haymob.shopsdk.core.GQLObject

@Serializable
data class NodeContainer<T: GQLObject>(val edges: List<Node<T>>): GQLObject {
    @Serializable
    data class Node<T>(val node: T): GQLObject
}