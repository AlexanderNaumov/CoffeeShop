import core from "./../shop-core/Shop-core"
import shop = core.me.haymob.shop
import { useEffect, useState } from "react"

export default function useStoreState<S extends shop.store.State>(store: shop.store.Store<S, any>) {
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