package me.haymob.coffeeshopsdk.entities

import kotlinx.serialization.*
import me.haymob.coffeeshopsdk.core.*

@Serializable
data class Product(
    val objectId: String,
    val body: Int,
    val roast: Int,
    val name: String,
    val acidity: Int,
    var region: Region,
    val description: String,
    val thumbnail: File,
    val price: Price,
    val categories: NodeContainer<Category>
): GQLObject

internal val productField = field {
    field(Product::objectId)
    field(Product::body)
    field(Product::roast)
    field(Product::name)
    field(Product::acidity)
    field(Product::region, regionField)
    field(Product::description)
    field(Product::thumbnail, fileField)
    field(Product::price)
    field(Product::categories) {
        field(NodeContainer<Category>::edges) {
            field(NodeContainer.Node<Category>::node, categoryField)
        }
    }
}