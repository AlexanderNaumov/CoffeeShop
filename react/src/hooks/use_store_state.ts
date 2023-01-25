import core from "./../coffee-shop-core/CoffeeShop-core"
import coffeeshop = core.me.haymob.coffeeshop
import { useEffect, useState } from "react"

export default function useStoreState<S extends coffeeshop.store.State>(store: coffeeshop.store.Store<S, any>) {
    const [state, setState] = useState<S>(store.currentState)

    useEffect(() => {
        const job = store.stateFlow().collect(
            s => setState(s),
            err => { }
        )
        return () => {
            job.cancel()
        }
    })

    return state
}