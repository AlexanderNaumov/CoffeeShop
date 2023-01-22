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
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.unit.sp

sealed class TopBarNavigationType {
    class Back(val onAction: () -> Unit) : TopBarNavigationType()
    object None : TopBarNavigationType()
}

sealed class TopBarActionType {
    class DropdownMenu(val items: List<TopBarActionItem>) : TopBarActionType()
    class Button(val image: ImageVector, val onAction: () -> Unit) : TopBarActionType()
    object None : TopBarActionType()
}

class TopBarActionItem(
    val title: String,
    val onAction: () -> Unit
)

@Composable
fun TopBar(
    title: String,
    navigationType: TopBarNavigationType = TopBarNavigationType.None,
    actionType: TopBarActionType = TopBarActionType.None
) {
    var showMenu by remember { mutableStateOf(false) }
    TopAppBar(
        title = { Text(title, fontSize = 18.sp) },
        navigationIcon = when (navigationType) {
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
            when (actionType) {
                is TopBarActionType.DropdownMenu -> {
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
                        actionType.items.map {
                            DropdownMenuItem(onClick = {
                                it.onAction()
                                showMenu = false
                            }) {
                                Text(it.title)
                            }
                        }
                    }
                }
                is TopBarActionType.Button -> {
                    IconButton(onClick = actionType.onAction) {
                        Icon(
                            actionType.image,
                            contentDescription = null
                        )
                    }
                }
                is TopBarActionType.None -> Unit
            }
        },
        backgroundColor = Color.White,
        contentColor = Color.Black
    )
}