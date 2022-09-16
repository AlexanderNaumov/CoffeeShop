package me.haymob.coffeeshop.android.wishlist

import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import me.haymob.coffeeshop.android.components.EmptyList
import me.haymob.coffeeshop.android.components.TopBar
import me.haymob.coffeeshop.android.navigation.Navigator
import me.haymob.coffeeshop.ui.customer.wishlist.WishlistUIStore

class WishlistScreen(
    val navigator: Navigator,
    val store: WishlistUIStore
) {
    @Composable
    fun Body() {
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
}