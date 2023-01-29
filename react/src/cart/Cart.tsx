import { List, Stack, Checkbox, Button, ButtonToolbar } from "rsuite"
import core from "../shop-core/Shop-core"
import shop = core.me.haymob.shop
import CartUIStore = shop.ui.cart.CartUIStore
import { useNavigate } from "react-router-dom"
import ProductQtyButtons from "../components/ProductQtyButtons"
import ProductLoader from "../components/ProductLoader"
import Colors from "../Colors"
import useStoreState from "../hooks/use_store_state"

type CloseCart = () => void

export default (props: { closeCart: CloseCart }) => <Cart store={shop.cartUIStore()} closeCart={props.closeCart} />

interface CartProps {
    store: CartUIStore
    closeCart: CloseCart
}

function Cart({ store, closeCart }: CartProps) {
    const state = useStoreState(store)
    const navigate = useNavigate()

    const cart = state.cart

    if (cart == null || cart.getItems().length == 0) return <div style={{ marginLeft: 50, marginTop: 8 }}>is empty</div>

    return <div style={{ top: 56, bottom: 0, left: 0, right: 0, position: "fixed", overflowY: "auto", background: Colors.porcelain }}>
        <Stack justifyContent="space-between" style={{ marginLeft: 10, marginRight: 16, height: 46 }}>
            <Stack>
                <Checkbox checked={state.isSelectedAllItems} onClick={() => store.selectAllItems()}>Select all</Checkbox>
            </Stack>
            <Button appearance="subtle" style={{ color: "red" }} onClick={() => store.removeSelectedItems()}>Remove selected</Button>
        </Stack>
        <List hover>
            {
                cart.getItems().map(item => <List.Item key={item.id} onClick={() => {
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
            state.isShowCheckoutButton && <ButtonToolbar style={{ marginLeft: 18, marginRight: 18 }} onClick={() => {
                closeCart()
                navigate("/checkout")
            }}>
                <Button appearance="primary" color="green" block>CHECKOUT</Button>
            </ButtonToolbar>
        }
    </div>
}