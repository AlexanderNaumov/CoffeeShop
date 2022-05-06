package me.haymob.coffeeshop.android

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import me.haymob.coffeeshop.*
import me.haymob.coffeeshop.catalog.CatalogStore
import me.haymob.coffeeshop.catalog.actions.loadCatalog

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        coreInit()

        val store = app.koin.get<CatalogStore>()

        val button: Button = findViewById(R.id.button)
        button.setOnClickListener {
            store.loadCatalog()
        }
    }
}
