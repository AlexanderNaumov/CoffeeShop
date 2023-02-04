package me.haymob.shop.domain.services

import me.haymob.shopsdk.catalog.CatalogController

internal class CatalogService(
    private val catalogController: CatalogController
) {
    fun collections() = catalogController.collections()
    fun products() = catalogController.products()
}