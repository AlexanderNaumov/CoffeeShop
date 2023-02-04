package me.haymob.shopsdk.catalog

import kotlinx.serialization.Serializable
import me.haymob.shopsdk.core.*
import me.haymob.shopsdk.entities.*
import me.haymob.shopsdk.services.HTTPService

class CatalogController internal constructor(
    private val http: HTTPService
) {

    @Serializable
    private data class CollectionsQuery(val collections: Collections) {
        @Serializable
        data class Collections(val items: List<me.haymob.shopsdk.entities.Collection>): GQLObject
    }

    fun collections() = http.graphQL(query {
        field(CollectionsQuery::collections) {
            field(CollectionsQuery.Collections::items, collectionField)
        }
    }).decode<CollectionsQuery>().tryMap { it.collections.items }

    @Serializable
    private data class ProductsQuery(val products: Products) {
        @Serializable
        data class Products(val items: List<Product>): GQLObject
    }

    fun products() = http.graphQL(query {
        field(ProductsQuery::products) {
            field(ProductsQuery.Products::items, productField)
        }
    }).decode<ProductsQuery>().tryMap { it.products.items }
}