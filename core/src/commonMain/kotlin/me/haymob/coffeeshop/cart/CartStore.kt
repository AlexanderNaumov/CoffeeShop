package me.haymob.coffeeshop.cart

import me.haymob.coffeeshop.services.ShopService
import me.haymob.coffeeshop.services.CartService
import me.haymob.coffeeshop.store.Store

class CartStore(
    internal val shopService: ShopService,
    internal val cartService: CartService
): Store<CartState, CartEffect>(CartState())