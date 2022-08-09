import core from "./coffee-shop-core/CoffeeShop-core"
import CatalogUIState = core.me.haymob.coffeeshop.ui.catalog.CatalogUIState
import Category = core.me.haymob.coffeeshop.entities.Category
import Price = core.me.haymob.coffeeshop.entities.Price

declare module "./coffee-shop-core/CoffeeShop-core" {
    namespace me.haymob.coffeeshop.ui.catalog {
        interface CatalogUIState {
            getCategories(): Array<Category>
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