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
import androidx.navigation.NavHostController
import com.google.accompanist.swiperefresh.SwipeRefresh
import com.google.accompanist.swiperefresh.rememberSwipeRefreshState
import me.haymob.coffeeshop.android.Porcelain
import me.haymob.coffeeshop.android.components.InputTextField
import me.haymob.coffeeshop.android.components.Loader
import me.haymob.coffeeshop.android.components.TopBar
import me.haymob.coffeeshop.android.components.TopBarNavigationType
import me.haymob.coffeeshop.android.navigation.NavigationItem
import me.haymob.coffeeshop.app
import me.haymob.coffeeshop.ui.customer.account.AccountUIEffect
import me.haymob.coffeeshop.ui.customer.account.AccountUIStore
import me.haymob.coffeeshop.ui.customer.account.actions.refreshCustomer
import me.haymob.coffeeshop.ui.customer.account.actions.updateCustomer
import me.haymob.coffeeshop.ui.customer.account.actions.updateField

fun accountScreen(
    navController: NavHostController,
    store: AccountUIStore = app.koin.get()
): @Composable () -> Unit = {
    val state = store.state.collectAsState().value

    LaunchedEffect(key1 = Unit) {
        store.effect.collect {
            when (it) {
                is AccountUIEffect.Successes -> navController.popBackStack()
                is AccountUIEffect.Error -> navController.navigate(NavigationItem.Error.route(it.message))
            }
        }
    }

    Scaffold(
        topBar = {
            TopBar(
                "Account".uppercase(),
                TopBarNavigationType.Back(onAction = navController::popBackStack)
            )
        },
        backgroundColor = Color.Porcelain
    ) { _ ->
        SwipeRefresh(
            state = rememberSwipeRefreshState(isRefreshing = state.isRefreshing),
            onRefresh = { store.refreshCustomer() }
        ) {
            Box(Modifier.fillMaxSize()) {
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
                            .padding(horizontal = 16.dp)
                    ) {
                        Text("Update")
                    }
                }
                if (state.isLoading && state.isRefreshing.not()) Loader(Modifier.matchParentSize())
            }
        }
    }
}