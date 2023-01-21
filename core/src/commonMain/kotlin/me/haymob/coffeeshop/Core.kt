package me.haymob.coffeeshop

import me.haymob.coffeeshop.domain.services.AppStorage
import org.koin.core.KoinApplication
import org.koin.core.context.startKoin
import me.haymob.coffeeshopsdk.di.sdkModule
import me.haymob.coffeeshop.di.coreModule
import me.haymob.coffeeshopsdk.ConfigController
import me.haymob.coffeeshopsdk.services.ConfigState

lateinit var app: KoinApplication

fun coreInit() {
    app = startKoin {
        modules(
            sdkModule,
            coreModule
        )
    }

    val storage = app.koin.get<AppStorage>()
    val config = app.koin.get<ConfigController>()

    config.config(ConfigState(
        "http://vm71618.haymob.serv-dns.ru:1337/graphql",
        "lrfQ9bQKJDpFFVffvfZN",
        "2MQDMG5ett10fdzOvDWUp46hHRhd5w",
        storage.customerToken(),
        false
    ))
}