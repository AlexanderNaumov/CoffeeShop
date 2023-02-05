package me.haymob.shop.android.components

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowDropDown
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import me.haymob.shop.android.R
import me.haymob.shop.android.extensions.string
import me.haymob.shop.entities.Product

@Composable
fun ProductDetailInfoCell(variants: List<Product.Variant>, selectedIndex: Int, selectVariant: (Int) -> Unit, inc: () -> Unit, dec: () -> Unit) {
    var expanded by remember { mutableStateOf(false) }
    val variant = variants[selectedIndex]

    Column(
        verticalArrangement = Arrangement.Center,
        modifier = Modifier
            .fillMaxWidth()
            .background(Color.White)
            .padding(horizontal = 15.dp, vertical = 10.dp)
    ) {
        if (variants.count() > 1) {
            Box {
                OutlinedButton(
                    onClick = { expanded = true },
                    colors = ButtonDefaults.outlinedButtonColors(contentColor = Color.Black),
                    contentPadding = PaddingValues(8.dp)
                ) {
                    Row(
                        horizontalArrangement = Arrangement.SpaceBetween,
                        modifier = Modifier.fillMaxWidth()
                    ) {
                        Text(
                            variant.name,
                            fontSize = 18.sp,
                            fontWeight = FontWeight.Normal
                        )
                        Icon(
                            Icons.Filled.ArrowDropDown,
                            contentDescription = null
                        )
                    }
                }
                DropdownMenu(
                    expanded = expanded,
                    onDismissRequest = { expanded = false }
                ) {
                    variants.forEachIndexed { index, variant ->
                        DropdownMenuItem(onClick = {
                            selectVariant(index)
                            expanded = false
                        }) {
                            Text(variant.name)
                        }
                    }
                }
            }
        } else {
            Text(variant.name, fontSize = 18.sp)
        }
        Row(
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically,
            modifier = Modifier
                .fillMaxWidth()
                .padding(top = 8.dp)
        ) {
            Column {
                Text(
                    variant.price.string,
                    fontSize = 18.sp,
                    fontWeight = FontWeight.Bold
                )
                Row(
                    verticalAlignment = Alignment.CenterVertically,
                    modifier = Modifier.padding(top = 4.dp)
                ) {
                    Text(variant.sku, fontSize = 14.sp)
                    Text(
                        variant.stockLevel,
                        color = Color.Gray,
                        fontSize = 13.sp,
                        fontWeight = FontWeight.Bold,
                        modifier = Modifier.padding(start = 8.dp)
                    )
                }
            }
            if (variant.qty == 0) {
                ActionButton(R.drawable.ic_plus, 60.dp, onClick = inc)
            } else {
                ActionButtons(variant.qty, inc = inc, dec = dec)
            }
        }
    }
}