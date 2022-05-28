package me.haymob.coffeeshop.domain.catalog

import me.haymob.coffeeshop.domain.services.ShopService
import me.haymob.coffeeshop.store.Store

class CatalogStore(
    internal val shopService: ShopService
): Store<CatalogState, CatalogEffect>(CatalogState())