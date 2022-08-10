import { useState } from "react"
import core from "../coffee-shop-core/CoffeeShop-core"
import coffeeshop = core.me.haymob.coffeeshop
import State = coffeeshop.store.State
import Store = coffeeshop.store.Store

export function useStateFromStore<S extends State>(store: Store<S, any>) {
    let [state, setState] = useState(store.currentState)
    store.onState(() => setState(store.currentState))
    return state
}