package me.haymob.coffeeshop.ui.cart.checkout.actions

import me.haymob.coffeeshop.domain.cart.actions.setAddress
import me.haymob.coffeeshop.ui.cart.checkout.CheckoutUIStore

fun CheckoutUIStore.setAddress(addressId: String) = cartStore.setAddress(addressId)