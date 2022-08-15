import { FlexboxGrid, List, Panel, Button, ButtonToolbar, Stack } from "rsuite"
import "../core.extensions"
import core from "../coffee-shop-core/CoffeeShop-core"
import coffeeshop = core.me.haymob.coffeeshop
import OrderDetailUIStore = coffeeshop.ui.customer.order.detail.OrderDetailUIStore
import { Component } from "react"
import { useParams } from "react-router-dom"
import FullScreenLoader from "../components/FullScreenLoader"
import OrderDetailHeader from "../components/OrderDetailHeader"
import OrderProductCell from "../components/OrderProductCell"

type OpenCart = () => void

export default (props: { openCart: OpenCart }) => <OrderDetail orderId={useParams().id as string} openCart={props.openCart} />

class OrderDetail extends Component<{ orderId: string, openCart: OpenCart }> {
    private store: OrderDetailUIStore
    constructor(props: { orderId: string, openCart: OpenCart }) {
        super(props)
        this.store = coffeeshop.orderDetailUIStore(props.orderId)
        this.store.onState(() => this.setState({}))
    }
    render() {
        return <OrderDetailView store={this.store} openCart={this.props.openCart} />
    }
}

function OrderDetailView(props: { store: OrderDetailUIStore, openCart: OpenCart }) {
    let { store, openCart } = props
    let state = store.currentState
    let order = state.order

    if (order == null) return <div></div>

    return <div>
        <FlexboxGrid justify="center" style={{ marginTop: 50 }}>
            <FlexboxGrid.Item style={{ width: 500 }}>
                <Panel bordered style={{ background: "white" }}>
                    <OrderDetailHeader title="Payment Methods" />
                    <List size="md" bordered>
                        <List.Item>{order.paymentMethod.title}</List.Item>
                    </List>
                    <OrderDetailHeader title="Shipping Methods" />
                    <List size="md" bordered>
                        <List.Item>{order.shippingMethod.title}</List.Item>
                    </List>
                    <OrderDetailHeader title="Address" />
                    <List size="md" bordered>
                        <List.Item>
                            <div>{order.address.firstName} {order.address.lastName}</div>
                            <div>{order.address.city}, {order.address.street}, {order.address.postcode}</div>
                        </List.Item>
                    </List>
                    <OrderDetailHeader title="Items" />
                    <List size="md" bordered>
                        {
                            order.getProducts().map(product => <OrderProductCell key={product.id} product={product} />)
                        }
                        <List.Item>
                            {
                                order.totalPrice != null && <Stack justifyContent="space-between" style={{ fontSize: 20 }}>
                                    <div>TOTAL</div>
                                    <div>{order.totalPrice.stringValue()}</div>
                                </Stack>
                            }
                        </List.Item>
                    </List>
                    <ButtonToolbar style={{ marginTop: 30 }} onClick={() => {
                        store.reorder()
                        openCart()
                    }}>
                        <Button appearance="primary" color="green" block>Reorder</Button>
                    </ButtonToolbar>
                </Panel>
            </FlexboxGrid.Item>
        </FlexboxGrid>
        {
            state.isLoading && <FullScreenLoader />
        }
    </div>
}