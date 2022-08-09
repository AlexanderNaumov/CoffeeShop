import { useState, useEffect } from "react"
import core from "../coffee-shop-core/CoffeeShop-core"
import coffeeshop = core.me.haymob.coffeeshop
import actions = coffeeshop.ui.catalog.actions
import Product = coffeeshop.entities.Product

export function useCatalogUIStore() {
    let store = coffeeshop.catalogUIStore()

    let [state, setState] = useState(store.currentState)

    useEffect(() => {
        console.log("run useCatalogUIStore")
        coffeeshop.onState(store, () => {
            setState(store.currentState)
        })

        actions.loadCatalog(store)

        return () => {

        }
    }, [])

    return {
        loadCatalog: () => actions.loadCatalog(store),
        incrementProduct: (product: Product) => actions.incrementProduct(store, product),
        decrementProduct: (product: Product) => actions.decrementProduct(store, product),
        state: state
    }
}