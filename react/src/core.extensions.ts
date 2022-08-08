import core from "./coffee-shop-core/CoffeeShop-core"

declare module "./coffee-shop-core/CoffeeShop-core" {
    export namespace me.haymob.coffeeshop.ui.catalog {
        export interface CatalogUIState {
            getCategories(): Array<me.haymob.coffeeshop.entities.Category>
        }
    }
    export namespace me.haymob.coffeeshop.entities {
        export interface Category {
            getProducts(): Array<me.haymob.coffeeshop.entities.Product>
        }
    }
}

core.me.haymob.coffeeshop.ui.catalog.CatalogUIState.prototype.getCategories = function() {
    let arr = this.categories["h_1"]
    return Array.isArray(arr) ? arr : Array()
}

core.me.haymob.coffeeshop.entities.Category.prototype.getProducts = function() {
    let arr = this.products["h_1"]
    return Array.isArray(arr) ? arr : Array()
}