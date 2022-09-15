package me.haymob.coffeeshop.android.components

import androidx.compose.material.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBackIos
import androidx.compose.material.icons.filled.MoreVert
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.getValue
import androidx.compose.runtime.setValue
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.sp

sealed class TopBarNavigationType {
    class Back(val onAction: () -> Unit): TopBarNavigationType()
    object None: TopBarNavigationType()
}

sealed class TopBarActionType {
    class DropdownMenu(val items: List<TopBarActionItem>): TopBarActionType()
    object None: TopBarActionType()
}

class TopBarActionItem(
    val title: String,
    val onAction: () -> Unit
)

@Composable
fun TopBar(title: String, actions: List<TopBarActionItem> = emptyList()) {
    TopBar(title, TopBarNavigationType.None, actions)
}

@Composable
fun TopBar(title: String, navigationType: TopBarNavigationType, actions: List<TopBarActionItem> = emptyList()) {
    var showMenu by remember { mutableStateOf(false) }
    TopAppBar(
        title = { Text(text = title, fontSize = 18.sp) },
        navigationIcon =  when (navigationType) {
            is TopBarNavigationType.Back -> {
                {
                    IconButton(onClick = navigationType.onAction) {
                        Icon(
                            Icons.Filled.ArrowBackIos,
                            contentDescription = null
                        )
                    }
                }
            }
            else -> null
        },
        actions = {
            if (actions.isEmpty()) return@TopAppBar
            IconButton(onClick = { showMenu = !showMenu }) {
                Icon(
                    Icons.Default.MoreVert,
                    contentDescription = null
                )
            }
            DropdownMenu(
                expanded = showMenu,
                onDismissRequest = { showMenu = false }
            ) {
                actions.map {
                    DropdownMenuItem(onClick = it.onAction) {
                        Text(text = it.title)
                    }
                }

            }
        },
        backgroundColor = Color.White,
        contentColor = Color.Black
    )
}