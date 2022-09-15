package me.haymob.coffeeshop.android.wishlist

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import me.haymob.coffeeshop.android.components.EmptyList
import me.haymob.coffeeshop.android.components.TopBar
import me.haymob.coffeeshop.android.navigation.Navigator
import me.haymob.coffeeshop.app
import me.haymob.coffeeshop.ui.customer.wishlist.WishlistUIStore

@Composable
fun WishlistScreen(navigator: Navigator, store: WishlistUIStore = app.koin.get()) {
    Wishlist(navigator, store)
}

@Composable
private fun Wishlist(navigator: Navigator, store: WishlistUIStore) {
    val state = store.state.collectAsState().value

    Scaffold(
        topBar = { TopBar("Wishlist") },
        content = { _ ->
            if (state.wishlist.isNotEmpty()) {
                LazyColumn(modifier = Modifier.fillMaxSize()) {
                    items(items = state.wishlist, { it.id }) { product ->

                    }
                }
            } else {
                EmptyList("Empty Wishlist")
            }
        },
        backgroundColor = Color.White
    )
}