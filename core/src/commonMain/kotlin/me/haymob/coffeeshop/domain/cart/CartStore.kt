package me.haymob.coffeeshop.domain.cart

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.cart.actions.productSetLoading
import me.haymob.coffeeshop.domain.mediators.StoreMediator
import me.haymob.coffeeshop.domain.services.ShopService
import me.haymob.coffeeshop.domain.services.AppStorage
import me.haymob.coffeeshop.store.Store

class CartStore(
    internal val shopService: ShopService,
    internal val storage: AppStorage,
    internal val mediator: StoreMediator
): Store<CartState, CartEffect>(CartState())
