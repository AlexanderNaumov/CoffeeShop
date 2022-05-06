package me.haymob.coffeeshopsdk

import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.launch
import me.haymob.coffeeshopsdk.cart.*

data class Config(
    val url: String,
    val appId: String,
    val masterKey: String,
    val isLoggingEnabled: Boolean = false
)

internal var config = Config("", "", "")

fun config(c: Config) {
    config = c
}

private val scope = CoroutineScope(Dispatchers.Unconfined + Job())

fun test() {
    config(Config(
        "http://vm71618.haymob.serv-dns.ru:1337/graphql",
        "lrfQ9bQKJDpFFVffvfZN",
        "2MQDMG5ett10fdzOvDWUp46hHRhd5w",
        true
    ))


    scope.launch {
        try {
//            categories().collect {
//                println(it)
//            }
//            products(listOf("poJjgm0EDZ")).collect {
//                println(it)
//            }
//            createCart().collect {
//                println(it)
//            }
//            addProduct("f3E5pVEbT4", "pHVUM7LxPO", 10).collect {
//                println(it)
//            }
//            updateItem("KPL59fMcrZ", 2).collect {
//                println(it)
//            }
//            removeItem("p5vz6RSG6E").collect {
//                println(it)
//            }
//            deleteCart("f3E5pVEbT4").collect {
//                println(it)
//            }

        } catch (e: Exception) {
            println(e)
        }
    }
}