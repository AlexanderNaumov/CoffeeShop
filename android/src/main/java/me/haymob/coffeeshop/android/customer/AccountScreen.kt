package me.haymob.coffeeshop.android.customer

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.Button
import androidx.compose.material.Scaffold
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.google.accompanist.swiperefresh.SwipeRefresh
import com.google.accompanist.swiperefresh.rememberSwipeRefreshState
import me.haymob.coffeeshop.android.Porcelain
import me.haymob.coffeeshop.android.components.InputTextField
import me.haymob.coffeeshop.android.components.Loader
import me.haymob.coffeeshop.android.components.TopBar
import me.haymob.coffeeshop.android.components.TopBarNavigationType
import me.haymob.coffeeshop.android.navigation.NavigationItem
import me.haymob.coffeeshop.android.navigation.Navigator
import me.haymob.coffeeshop.app
import me.haymob.coffeeshop.ui.catalog.actions.refreshCatalog
import me.haymob.coffeeshop.ui.customer.account.AccountUIEffect
import me.haymob.coffeeshop.ui.customer.account.AccountUIStore
import me.haymob.coffeeshop.ui.customer.account.actions.refreshCustomer
import me.haymob.coffeeshop.ui.customer.account.actions.updateCustomer
import me.haymob.coffeeshop.ui.customer.account.actions.updateField
import me.haymob.coffeeshop.ui.customer.login.actions.login
import me.haymob.coffeeshop.ui.customer.login.actions.updateField

@Composable
fun AccountScreen(navigator: Navigator, store: AccountUIStore = app.koin.get()) {
    Account(navigator, store)
}

@Composable
private fun Account(navigator: Navigator, store: AccountUIStore) {
    val state = store.state.collectAsState().value

    LaunchedEffect(key1 = Unit) {
        store.effect.collect {
            when (it) {
                is AccountUIEffect.Successes -> navigator.back()
                is AccountUIEffect.Error -> navigator.navigate(NavigationItem.Error.route(it.message))
            }
        }
    }

    Scaffold(
        topBar = { TopBar("Account".uppercase(), TopBarNavigationType.Back(onAction = navigator::back)) },
        content = { _ ->
            SwipeRefresh(
                state = rememberSwipeRefreshState(isRefreshing = state.isRefreshing),
                onRefresh = { store.refreshCustomer() }) {
                Box(modifier = Modifier.fillMaxSize()) {
                    Column(
                        horizontalAlignment = Alignment.CenterHorizontally,
                        verticalArrangement = Arrangement.Center,
                        modifier = Modifier
                            .fillMaxSize()
                            .verticalScroll(rememberScrollState())
                    ) {
                        state.fields.map { field ->
                            InputTextField(field) {
                                store.updateField(field.type, it)
                            }
                        }
                        Button(
                            onClick = { store.updateCustomer() },
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(start = 16.dp, end = 16.dp)
                        ) {
                            Text(text = "Update")
                        }
                    }
                    if (state.isLoading && state.isRefreshing.not()) Loader(modifier = Modifier.matchParentSize())
                }
            }
        },
        backgroundColor = Color.Porcelain
    )
}