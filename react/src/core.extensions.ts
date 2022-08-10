import core from "./coffee-shop-core/CoffeeShop-core"
import coffeeshop = core.me.haymob.coffeeshop
import loginActions = coffeeshop.ui.customer.login.actions
import catalogActions = coffeeshop.ui.catalog.actions
import CatalogUIState = coffeeshop.ui.catalog.CatalogUIState
import CatalogUIStore = coffeeshop.ui.catalog.CatalogUIStore
import Product = coffeeshop.entities.Product
import Category = coffeeshop.entities.Category
import Price = coffeeshop.entities.Price
import LoginUIState = coffeeshop.ui.customer.login.LoginUIState
import LoginUIStore = coffeeshop.ui.customer.login.LoginUIStore
import Field = coffeeshop.entities.Field
import FieldType = coffeeshop.entities.FieldType


declare module "./coffee-shop-core/CoffeeShop-core" {
    namespace me.haymob.coffeeshop.ui.catalog {
        interface CatalogUIState {
            getCategories(): Array<Category>
        }
        interface CatalogUIStore {
            loadCatalog(): void
            incrementProduct(product: Product): void
            decrementProduct(product: Product): void
        }
    }
    namespace me.haymob.coffeeshop.ui.customer.login {
        interface LoginUIState {
            getFields(): Array<Field>
        }
        interface LoginUIStore {
            updateField(type: FieldType, value: string): void
            login(): void
        }
    }
    namespace me.haymob.coffeeshop.entities {
        interface Category {
            getProducts(): Array<Product>
        }
        interface Price {
            stringValue(): String
        }
    }
}

CatalogUIState.prototype.getCategories = function() {
    let arr = this.categories["h_1"]
    return Array.isArray(arr) ? arr : Array()
}



Category.prototype.getProducts = function() {
    let arr = this.products["h_1"]
    return Array.isArray(arr) ? arr : Array()
}

Price.prototype.stringValue = function() {
    return `${this.value} ${this.currency}`
}

LoginUIState.prototype.getFields = function() {
    let arr = this.fields["h_1"]
    return Array.isArray(arr) ? arr : Array()
}

LoginUIStore.prototype.updateField = function(type: FieldType, value: string) {
    loginActions.updateField(this, type, value)
}

LoginUIStore.prototype.login = function() {
    loginActions.login(this)
}

CatalogUIStore.prototype.loadCatalog = function() {
    catalogActions.loadCatalog(this)
}

CatalogUIStore.prototype.incrementProduct = function(product: Product) {
    catalogActions.incrementProduct(this, product)
}

CatalogUIStore.prototype.decrementProduct = function(product: Product) {
    catalogActions.decrementProduct(this, product)
}