import core from "./../coffee-shop-core/CoffeeShop-core"
import coffeeshop = core.me.haymob.coffeeshop
import { useEffect, useState } from "react"

export default function useStoreEffect<E>(store: coffeeshop.store.Store<any, E>, effect: (effect: E) => void) {
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