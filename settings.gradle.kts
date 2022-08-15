pluginManagement {
    repositories {
        google()
        gradlePluginPortal()
        mavenCentral()
    }
}

rootProject.name = "CoffeeShop"
include(":android")
include(":core")
include(":CoffeeShopSDK")
include(":Preferences")
include(":MultiplatformAnnotations")
include(":WeakRef")