package me.haymob.coffeeshop.android.navigation

interface Navigator {
    fun navigate(route: String) {}
    fun back() {}
}