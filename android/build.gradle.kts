plugins {
    id("com.android.application")
    kotlin("android")
}

android {
    signingConfigs {
        create("release") {
            storeFile = file("/Users/alexander/Developer/CoffeeShop/android/android.jks")
            storePassword = "123456"
            keyAlias = "key0"
            keyPassword = "123456"
        }

    }
    compileSdk = 33
    defaultConfig {
        applicationId = "me.haymob.coffeeshop.android"
        minSdk = 21
        targetSdk = 33
        versionCode = 1
        versionName = "1.0"
        vectorDrawables.useSupportLibrary = true
    }
    buildTypes {
        getByName("release") {
            isMinifyEnabled = false
        }
        release {
            signingConfig = signingConfigs.getByName("release")
        }
    }
    buildFeatures {
        compose = true
    }
    composeOptions {
        kotlinCompilerExtensionVersion = "1.3.2"
    }
    namespace = "me.haymob.coffeeshop.android"
}

val composeVersion = "1.3.0"

dependencies {
    implementation(project(":core"))
    implementation("io.insert-koin:koin-core:3.2.0")
    implementation("androidx.core:core-ktx:1.9.0")
    implementation("androidx.compose.ui:ui:$composeVersion")
    implementation("androidx.compose.material:material:$composeVersion")
    implementation("androidx.compose.material:material-icons-extended:$composeVersion")
    implementation("androidx.compose.ui:ui-tooling-preview:$composeVersion")
//    implementation("androidx.lifecycle:lifecycle-runtime-ktx:2.5.1")
    implementation("androidx.activity:activity-compose:1.6.1")
    debugImplementation("androidx.compose.ui:ui-tooling:$composeVersion")
//    implementation("androidx.compose.foundation:foundation:1.2.1")
    implementation("androidx.navigation:navigation-compose:2.5.3")
    implementation("io.coil-kt:coil-compose:2.2.0")
    implementation("com.google.accompanist:accompanist-swiperefresh:0.25.1")
}
