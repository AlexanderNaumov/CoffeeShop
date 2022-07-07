package me.haymob.coffeeshop.domain.catalog

import me.haymob.coffeeshop.domain.mediators.StoreMediator
import me.haymob.coffeeshop.domain.services.ShopService
import me.haymob.coffeeshop.store.Store

class CatalogStore(
    internal val shopService: ShopService,
    internal val mediator: StoreMediator
): Store<CatalogState, Unit>(CatalogState())