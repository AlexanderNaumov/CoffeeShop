package me.haymob.shop.android.components

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material.Icon
import androidx.compose.material.Text
import androidx.compose.material.TextField
import androidx.compose.material.TextFieldDefaults
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Error
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.input.VisualTransformation
import androidx.compose.ui.unit.dp
import me.haymob.shop.entities.Field
import me.haymob.shop.entities.FieldType

@Composable
fun InputTextField(field: Field, onChange: (String) -> Unit) {
    val isPassword = field.type == FieldType.Password || field.type == FieldType.NewPassword
    val isEmail = field.type == FieldType.Email
    val isError = field.error != null

    Column(
        modifier = Modifier.padding(horizontal = 16.dp)
    ) {
        TextField(
            value = field.value,
            onValueChange = onChange,
            trailingIcon = {
                if (isError) Icon(
                    Icons.Filled.Error,
                    "error",
                    tint = Color.Red
                )
            },
            singleLine = true,
            label = { Text(field.type.name) },
            visualTransformation = if (isPassword) PasswordVisualTransformation() else VisualTransformation.None,
            keyboardOptions = when {
                isPassword -> KeyboardOptions(keyboardType = KeyboardType.Password)
                isEmail -> KeyboardOptions(keyboardType = KeyboardType.Email)
                else -> KeyboardOptions.Default
            },
            colors = TextFieldDefaults.textFieldColors(
                backgroundColor = Color.White,
                unfocusedIndicatorColor = Color.White
            ),
            modifier = Modifier
                .fillMaxWidth()
                .padding(top = 4.dp)
        )
        if (isError) Text(
            text = field.error!!,
            color = Color.Red,
            modifier = Modifier.padding(top = 4.dp)
        )
    }
}