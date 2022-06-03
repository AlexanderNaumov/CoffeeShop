package me.haymob.coffeeshop

import me.haymob.coffeeshop.di.coreModule
import me.haymob.coffeeshop.domain.cart.CartStore
import me.haymob.coffeeshopsdk.*
import org.koin.core.KoinApplication
import org.koin.core.context.startKoin

lateinit var app: KoinApplication

fun coreInit() {
    config(Config(
        "http://vm71618.haymob.serv-dns.ru:1337/graphql",
        "lrfQ9bQKJDpFFVffvfZN",
        "2MQDMG5ett10fdzOvDWUp46hHRhd5w",
        false
    ))

    app = startKoin {
        modules(coreModule)
    }

    app.koin.get<CartStore>()
}

