package me.haymob.shop.ui.productDetail.actions

import me.haymob.shop.ui.productDetail.ProductDetailUIStore

fun ProductDetailUIStore.selectOption(index: Int) {
    setState {
        copy(selectedOption = index)
    }
}