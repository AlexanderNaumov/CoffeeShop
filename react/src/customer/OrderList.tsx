import { FlexboxGrid, List, Panel, Stack } from "rsuite"
import "../core.extensions"
import core from "../coffee-shop-core/CoffeeShop-core"
import coffeeshop = core.me.haymob.coffeeshop
import OrderListUIStore = coffeeshop.ui.customer.order.OrderListUIStore
import { useNavigate } from "react-router-dom"
import useStoreState from "../hooks/use_store_state"

export default () => <OrderList store={coffeeshop.orderListUIStore()} />

interface OrderListProps {
    store: OrderListUIStore
}

function OrderList({ store }: OrderListProps) {
    const state = useStoreState(store)
    const navigate = useNavigate()
    const orders = state.getOrders()

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