import { FlexboxGrid, List, Panel, Stack } from "rsuite"
import "../core.extensions"
import core from "../coffee-shop-core/CoffeeShop-core"
import coffeeshop = core.me.haymob.coffeeshop
import OrderListUIStore = coffeeshop.ui.customer.order.OrderListUIStore
import { Component } from "react"
import { useNavigate } from "react-router-dom"

export default class OrderList extends Component {
    private store = coffeeshop.orderListUIStore()
    constructor(props: Object) {
        super(props)
        this.store.onState(() => this.setState({}))
    }
    render() {
        return <OrderListView store={this.store} />
    }
}

function OrderListView(props: { store: OrderListUIStore }) {
    let { store } = props
    let state = store.currentState
    let navigate = useNavigate()
    let orders = state.getOrders()

    return <FlexboxGrid justify="center" style={{ marginTop: 50 }}>
        <FlexboxGrid.Item style={{ width: 500 }}>
            <Panel header="Orders" bordered style={{ background: "white" }}>
                {
                    orders.length > 0 ?
                        <List hover size="lg" bordered>
                            {
                                state.getOrders().map(order => <List.Item key={order.id} onClick={() => navigate(`/orders/${order.id}`)}>
                                    <Stack justifyContent="space-between" style={{ fontSize: 15 }}>
                                        <div># {order.id}</div>
                                        <div>{new Date(order.createdAt).toLocaleString()}</div>
                                    </Stack>
                                </List.Item>)
                            }
                        </List> :
                        <div>is empty</div>
                }
            </Panel>

        </FlexboxGrid.Item>
    </FlexboxGrid>
}