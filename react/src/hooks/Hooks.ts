import { useState, useEffect } from "react"
import core from "../coffee-shop-core/CoffeeShop-core"
const coffeeshop = core.me.haymob.coffeeshop
const actions = coffeeshop.ui.catalog.actions

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
        loadCatalog: () => { actions.loadCatalog(store) },
        state: state
    }
}