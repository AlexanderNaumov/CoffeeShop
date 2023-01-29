package me.haymob.shop.domain.services

import me.haymob.shopsdk.catalog.CatalogController

internal class CatalogService(
    private val catalogController: CatalogController
) {
    fun categories() = catalogController.categories()
    fun products(categoryIds: List<String>) = catalogController.products(categoryIds)
}