package me.haymob.coffeeshop.domain.catalog

sealed class CatalogEffect {
    object DidLoad: CatalogEffect()
}