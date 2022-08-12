import { List, Stack, Checkbox, Button, ButtonToolbar } from "rsuite"
import { Component } from "react"
import core from "../coffee-shop-core/CoffeeShop-core"
import coffeeshop = core.me.haymob.coffeeshop
import CartUIStore = coffeeshop.ui.cart.CartUIStore
import { useNavigate } from "react-router-dom"
import ProductQtyButtons from "../components/ProductQtyButtons"
import ProductLoader from "../components/ProductLoader"
import Colors from "../Colors"

export default class Cart extends Component<{closeCart: () => void}> {
    private store = coffeeshop.cartUIStore()
    constructor(props: {closeCart: () => void}) {
        super(props)
        this.store.onState(() => this.setState({}))
    }
    render() {
        return <CartContent store={this.store} closeCart={this.props.closeCart} />
    }
}

function CartContent(props: { store: CartUIStore, closeCart: () => void }) {
    let { store, closeCart } = props
    let state = store.currentState
    let navigate = useNavigate()

    let cart = store.currentState.cart

    if (cart == null || cart.getItems().length == 0) return <div>Empty Cart</div>

    return <div style={{ top: 56, bottom: 0, left: 0, right: 0, position: "fixed", overflowY: "auto", background: Colors.porcelain }}>
        <Stack justifyContent="space-between" style={{ marginLeft: 10, marginRight: 16, height: 46 }}>
            <Stack>
                <Checkbox checked={state.isSelectedAllItems} onClick={() => store.selectAllItems()}>Select all</Checkbox>
            </Stack>
            <Button appearance="subtle" style={{ color: "red" }} onClick={() => store.removeSelectedItems()}>Remove selected</Button>
        </Stack>
        <List hover>
            {
                cart.getItems().map(item => <List.Item onClick={() => {
                    closeCart()
                    navigate(`product/${item.product.id}`)
                }}>
                    <Stack justifyContent="space-between" style={{ marginLeft: 10, marginRight: 16 }}>
                        <Stack>
                            <Checkbox checked={state.itemSelected(item)} onClick={event => {
                                event.stopPropagation()
                                store.selectCartItem(item)
                            }} />
                            <img src={item.product.thumbnail} style={{ width: 50, height: 50, objectFit: "contain" }} />
                            <div style={{ marginLeft: 8 }}>
                                <div>{item.product.name}</div>
                                <div style={{ fontWeight: "bold", marginTop: 2 }}>{item.product.price.stringValue()}</div>
                            </div>
                        </Stack>
                        <ProductQtyButtons size="xs" qty={item.product.qty} inc={() => {
                            store.incrementProduct(item.product)
                        }} dec={() => {
                            store.decrementProduct(item.product)
                        }} />
                    </Stack>
                    {
                        item.product.isLoading && <ProductLoader size="sm" />
                    }
                </List.Item>)
            }
        </List>
        {
            cart.totalPrice != null && <Stack justifyContent="space-between" style={{ height: 50, marginLeft: 18, marginRight: 18, fontSize: 20 }}>
                <div>TOTAL</div>
                <div>{cart.totalPrice.stringValue()}</div>
            </Stack>
        }
        {
            state.isShowCheckoutButton && <ButtonToolbar style={{ marginLeft: 18, marginRight: 18 }}>
                <Button appearance="primary" color="green" block>CHECKOUT</Button>
            </ButtonToolbar>
        }
    </div>
}