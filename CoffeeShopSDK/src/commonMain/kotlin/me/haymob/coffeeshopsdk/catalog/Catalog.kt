package me.haymob.coffeeshopsdk.catalog

import kotlinx.serialization.Serializable
import me.haymob.coffeeshopsdk.core.*
import me.haymob.coffeeshopsdk.entities.*

@Serializable
private data class CategoriesQuery(val categories: NodeContainer<Category>)

fun categories() = http(query {
    field(CategoriesQuery::categories) {
        field(NodeContainer<Category>::edges) {
            field(NodeContainer.Node<Category>::node, categoryField)
        }
    }
}).decode<CategoriesQuery>().tryMap { it.categories.edges.map { it.node } }

@Serializable
private data class ProductsQuery(val products: NodeContainer<Product>)

private val productsField = field {
    field(NodeContainer<Product>::edges) {
        field(NodeContainer.Node<Product>::node, productField)
    }
}

fun products(categoryIds: List<String>? = null) = http(query {
    if (categoryIds != null) {
        field(
            ProductsQuery::products,
            productsField,
            "where" of argsOf(
                "categories" of argsOf(
                    "have" of argsOf(
                        "objectId" of argsOf(
                            "in" of categoryIds
                        )
                    )
                )
            )
        )
    } else {
        field(ProductsQuery::products, productsField)
    }
}).decode<ProductsQuery>().tryMap { it.products.edges.map { it.node } }