import { Component } from "react"
import core from "./coffee-shop-core/CoffeeShop-core"
import coffeeshop = core.me.haymob.coffeeshop

export default abstract class SComponent<S extends coffeeshop.store.Store<any, any>, P = {}> extends Component<P> {
    protected abstract store: S

    constructor(props: P) {
        super(props)
    }

    componentDidMount() {
        this.store.onState(() => this.setState({}))
    }

    componentWillUnmount() {
        this.store.destroy()
    }
}