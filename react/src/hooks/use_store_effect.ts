import core from "./../shop-core/Shop-core"
import shop = core.me.haymob.shop
import { useEffect, useState } from "react"

export default function useStoreEffect<E>(store: shop.store.Store<any, E>, effect: (effect: E) => void) {
    useEffect(() => {
        const job = store.effectFlow().collect(
            e => effect(e),
            err => { }
        )
        return () => {
            job.cancel()
        }
    })
}