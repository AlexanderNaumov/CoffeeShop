package me.haymob.coffeeshop

import me.haymob.coffeeshop.di.coreModule
import me.haymob.coffeeshop.domain.mediators.StoreMediator
import me.haymob.coffeeshop.domain.services.AppStorage
import me.haymob.coffeeshopsdk.*
import me.haymob.multiplatformannotations._JsExport
import org.koin.core.KoinApplication
import org.koin.core.context.startKoin

val app = startKoin {
    modules(coreModule)
}

fun coreInit() {
    val storage = app.koin.get<AppStorage>()

    config(Config(
        "http://vm71618.haymob.serv-dns.ru:1337/graphql",
        "lrfQ9bQKJDpFFVffvfZN",
        "2MQDMG5ett10fdzOvDWUp46hHRhd5w",
        storage.customerToken(),
        false
    ))

    app.koin.get<StoreMediator>()
}