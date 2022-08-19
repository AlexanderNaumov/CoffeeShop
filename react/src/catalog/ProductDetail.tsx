import { FlexboxGrid, Stack } from "rsuite"
import { Component } from "react"
import { useParams } from "react-router-dom"
import core from "../coffee-shop-core/CoffeeShop-core"
import "../core.extensions"
import coffeeshop = core.me.haymob.coffeeshop
import ProductDetailUIStore = coffeeshop.ui.productDetail.ProductDetailUIStore
import ProductQtyButtons from "../components/ProductQtyButtons"
import Divider from "../components/Divider"
import ProductLoader from "../components/ProductLoader"
import favorite from "../resources/favorite.svg"
import favoriteFill from "../resources/favoriteFill.svg"

export default () => <ProductDetail productId={useParams().id as string} />

class ProductDetail extends Component<{ productId: string }> {
    private store: ProductDetailUIStore

    constructor(props: { productId: string }) {
        super(props)
        let { productId } = props
        this.store = coffeeshop.productDetailUIStore(productId)
        this.store.onState(() => this.setState({}))
    }

    componentWillUnmount() {
        this.store.destroy()
    }

    render() {
        let { productId } = this.props
        if (this.store.currentState.product?.id != productId) {
            this.store = coffeeshop.productDetailUIStore(productId)
            this.store.onState(() => this.setState({}))
        }
        return <ProductDetailView store={this.store} />
    }
}

function ProductDetailView(props: { store: ProductDetailUIStore }) {
    let { store } = props
    let state = store.currentState

    let product = state.product

    if (product == null) return <div></div>

    return <FlexboxGrid justify="center" >
        <FlexboxGrid.Item style={{ width: 700 }}>
            <div style={{ position: "relative" }}>
                <img src={product.thumbnail} style={{ width: "100%", aspectRatio: "1.3", objectFit: "contain" }} />
                {
                    state.isShowWishlist &&
                    <div style={{ position: "absolute", top: 16, right: 16 }} onClick={
                        () => {
                            if (product!!.isOnWishlist) {
                                store.removeProductFromWishlist()
                            } else {
                                store.addProductToWishlist()
                            }
                        }
                    } >
                        <img src={product.isOnWishlist ? favoriteFill : favorite} style={{ width: 28 }} />
                    </div>

                }
            </div>
            <Stack justifyContent="space-between" style={{ background: "white", paddingTop: 6, paddingLeft: 16, paddingRight: 16, paddingBottom: 6 }}>
                <div>
                    <div style={{ fontSize: 18, marginTop: 8 }}>{product.name}</div>
                    <div style={{ fontSize: 18, fontWeight: "bold", marginTop: 8 }}>{product.price.stringValue()}</div>
                </div>
                <ProductQtyButtons qty={product.qty} inc={() => store.incrementProduct()} dec={() => store.decrementProduct()} />
            </Stack>
            <Divider />
            <InfoBlock title="Body" content={product.body.toString()} />
            <InfoBlock title="Roast" content={product.roast.toString()} />
            <InfoBlock title="Acidity" content={product.acidity.toString()} />
            <div style={{ background: "white", padding: 16, fontSize: 16 }}>{product.description}</div>
            {
                product.isLoading && <ProductLoader />
            }
        </FlexboxGrid.Item>
    </FlexboxGrid>
}

function InfoBlock(props: { title: string, content: string }) {
    return <div>
        <Stack justifyContent="space-between" style={{ background: "white", padding: 16 }}>
            <div style={{ fontSize: 18 }}>{props.title}</div>
            <div style={{ fontSize: 18, fontWeight: "bold" }}>{props.content}</div>
        </Stack>
        <Divider indent={16} />
    </div>
}