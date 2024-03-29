import { FlexboxGrid, List, Panel, Button, ButtonToolbar, Stack, Modal } from "rsuite"
import "../core.extensions"
import core from "../coffee-shop-core/CoffeeShop-core"
import coffeeshop = core.me.haymob.coffeeshop
import CheckoutUIStore = coffeeshop.ui.cart.checkout.CheckoutUIStore
import CheckoutUIEffect = coffeeshop.ui.cart.checkout.CheckoutUIEffect
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import FullScreenLoader from "../components/FullScreenLoader"
import ErrorModal from "../components/ErrorModal"
import OrderDetailHeader from "../components/OrderDetailHeader"
import OrderProductCell from "../components/OrderProductCell"
import useStoreState from "../hooks/use_store_state"
import useStoreEffect from "../hooks/use_store_effect"
import CheckoutCell from "../components/CheckoutCell"

export default () => <Checkout store={coffeeshop.checkoutUIStore()} />

interface CheckoutProps {
    store: CheckoutUIStore
}

function Checkout({ store }: CheckoutProps) {
    const state = useStoreState(store)
    const navigate = useNavigate()

    const [error, setError] = useState<string>()
    const [success, setSuccess] = useState<string>()

    const cart = state.cart

    useStoreEffect(store, effect => {
        if (effect instanceof CheckoutUIEffect.OrderSuccess) setSuccess(effect.id)
        if (effect instanceof CheckoutUIEffect.Error) setError(effect.message)
    })

    const closeSuccess = () => setSuccess(undefined)
    return <div>
        <ErrorModal error={error} open={error != undefined} onClose={() => setError(undefined)} />
        <Modal open={success != undefined} onClose={closeSuccess}>
            <Modal.Header>
                <Modal.Title>Success</Modal.Title>
            </Modal.Header>
            <Modal.Body>Oredr ID: {success}</Modal.Body>
            <Modal.Footer>
                <Button onClick={() => {
                    closeSuccess()
                    navigate("/")
                }} appearance="primary">
                    Ok
                </Button>
            </Modal.Footer>
        </Modal>
        {
            cart != null ? <div>
                <FlexboxGrid justify="center" style={{ marginTop: 50 }}>
                    <FlexboxGrid.Item style={{ width: 500 }}>
                        <Panel bordered style={{ background: "white" }}>
                            <OrderDetailHeader title="Payment Methods" />
                            <List size="md" bordered>
                                {
                                    cart.getPaymentMethods().map(method => <CheckoutCell
                                        key={method.id}
                                        title={method.title}
                                        checked={state.equalPaymentMethod(method)}
                                        action={() => store.selectPayment(method)}
                                    />)
                                }
                            </List>
                            <OrderDetailHeader title="Shipping Methods" />
                            <List size="md" bordered>
                                {
                                    cart.getShippingMethods().map(method => <CheckoutCell
                                        key={method.id}
                                        title={method.title}
                                        checked={state.equalShippingMethod(method)}
                                        action={() => store.selectShipping(method)}
                                    />)
                                }
                            </List>
                            <OrderDetailHeader title="Address" />
                            <List size="md" bordered>
                                {
                                    state.getAddresses().map(address => <CheckoutCell
                                        key={address.id}
                                        title={`${address.firstName} ${address.lastName}, ${address.city}, ${address.street}, ${address.postcode}`}
                                        checked={state.equalAddress(address)}
                                        action={() => store.setAddress(address)}
                                    />)
                                }
                            </List>
                            <OrderDetailHeader title="Items" />
                            <List size="md" bordered>
                                {
                                    cart.getItems().map(item => <OrderProductCell key={item.id} product={item.product} />)
                                }
                                <List.Item>
                                    {
                                        cart!.totalPrice != null && <Stack justifyContent="space-between" style={{ fontSize: 20 }}>
                                            <div>TOTAL</div>
                                            <div>{cart!.totalPrice.stringValue()}</div>
                                        </Stack>
                                    }
                                </List.Item>
                            </List>
                            <ButtonToolbar style={{ marginTop: 30 }} onClick={() => {
                                if (state.isActiveOrderButton) store.createOrder()
                            }}>
                                <Button appearance="primary" color="green" style={{
                                    background: state.isActiveOrderButton ? undefined : "gray"
                                }} block>Create Oreder</Button>
                            </ButtonToolbar>
                        </Panel>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
                {
                    state.isLoading && <FullScreenLoader />
                }
            </div> : <div></div>
        }
    </div>
}