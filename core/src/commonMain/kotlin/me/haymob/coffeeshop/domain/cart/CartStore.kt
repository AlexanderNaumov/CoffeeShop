package me.haymob.coffeeshop.domain.cart

import me.haymob.coffeeshop.domain.services.ShopService
import me.haymob.coffeeshop.domain.services.CartService
import me.haymob.coffeeshop.store.Store

class CartStore(
    internal val shopService: ShopService,
    internal val cartService: CartService
): Store<CartState, CartEffect>(CartState())