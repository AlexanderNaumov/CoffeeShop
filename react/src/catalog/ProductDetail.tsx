import { IconButton, FlexboxGrid, Stack, Loader } from "rsuite"
import { Component } from "react"
import { useParams } from "react-router-dom"
import core from "../coffee-shop-core/CoffeeShop-core"
import Colors from "../Colors"
import { useStateFromStore } from "../hooks/Hooks"
import coffeeshop = core.me.haymob.coffeeshop
import ProductDetailUIStore = coffeeshop.ui.productDetail.ProductDetailUIStore

export default () => <ProductDetail productId={useParams().id as string} />

class ProductDetail extends Component<{ productId: string }> {

    private store: ProductDetailUIStore

    constructor(props: { productId: string }) {
        super(props)
        let { productId } = props
        this.store = coffeeshop.productDetailUIStore(productId)
        console.log("hello ", this.store.currentState, productId)
    }

    render() {
        return <ProductDetailContent store={this.store} />
    }
}

function ProductDetailContent(props: { store: ProductDetailUIStore }) {
    let { store } = props
    let state = useStateFromStore(store)

    console.log(state.product)

    return <FlexboxGrid justify="center" style={{ background: Colors.porcelain }}>
        <FlexboxGrid.Item style={{ width: 700 }}>

        </FlexboxGrid.Item>
    </FlexboxGrid>
}