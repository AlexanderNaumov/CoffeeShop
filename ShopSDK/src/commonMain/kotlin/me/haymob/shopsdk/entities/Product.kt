package me.haymob.shopsdk.entities

import kotlinx.serialization.*
import me.haymob.shopsdk.core.*

@Serializable
data class Product(
    val id: String,
    val name: String,
    val description: String,
    val featuredAsset: Asset,
    val assets: List<Asset>,
    val variants: List<Variant>,
    val collections: List<Collection>
): GQLObject {
    @Serializable
    data class Variant(
        val id: String,
        val sku: String,
        val name: String,
        val price: Int,
        val currencyCode: String,
        val priceWithTax: Int,
        val stockLevel: String,
        val options: List<Option>
    ): GQLObject

    @Serializable
    data class Option(
        val id: String,
        val code: String,
        val name: String,
        val group: OptionGroup
    ): GQLObject

    @Serializable
    data class OptionGroup(
        val id: String,
        val code: String,
        val name: String
    ): GQLObject

    @Serializable
    data class Collection(val id: String): GQLObject
}

internal val productField = field {
    field(Product::id)
    field(Product::name)
    field(Product::description)
    field(Product::featuredAsset, assetField)
    field(Product::assets, assetField)
    field(Product::variants) {
        field(Product.Variant::id)
        field(Product.Variant::sku)
        field(Product.Variant::name)
        field(Product.Variant::price)
        field(Product.Variant::currencyCode)
        field(Product.Variant::priceWithTax)
        field(Product.Variant::stockLevel)
        field(Product.Variant::options) {
            field(Product.Option::id)
            field(Product.Option::code)
            field(Product.Option::name)
            field(Product.Option::group) {
                field(Product.OptionGroup::id)
                field(Product.OptionGroup::code)
                field(Product.OptionGroup::name)
            }
        }
    }
    field(Product::collections) {
        field(Product.Collection::id)
    }
}