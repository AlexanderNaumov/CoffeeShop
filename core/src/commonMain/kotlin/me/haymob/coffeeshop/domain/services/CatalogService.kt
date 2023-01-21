package me.haymob.coffeeshop.domain.services

import me.haymob.coffeeshopsdk.catalog.CatalogController

internal class CatalogService(
    private val catalogController: CatalogController
) {
    fun categories() = catalogController.categories()
    fun products(categoryIds: List<String>) = catalogController.products(categoryIds)
}