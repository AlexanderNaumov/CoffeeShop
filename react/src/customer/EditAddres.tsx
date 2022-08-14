import { FlexboxGrid, Panel, Form, Button, ButtonToolbar } from "rsuite"
import "../core.extensions"
import core from "../coffee-shop-core/CoffeeShop-core"
import coffeeshop = core.me.haymob.coffeeshop
import EditAddressUIStore = coffeeshop.ui.customer.address.edit.EditAddressUIStore
import EditAddressUIEffect = coffeeshop.ui.customer.address.edit.EditAddressUIEffect
import InputForm from "../components/InputForm"
import FullScreenLoader from "../components/FullScreenLoader"
import ErrorModal from "../components/ErrorModal"
import { Component, useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default () => <EditAddres addressId={useParams().id as string} />

class EditAddres extends Component<{ addressId: string }> {
    private store: EditAddressUIStore
    constructor(props: { addressId: string }) {
        super(props)
        this.store = coffeeshop.editAddressUIStore(props.addressId)
        this.store.onState(() => this.setState({}))
    }
    render() {
        return <EditAddresView store={this.store} />
    }
}

function EditAddresView(props: { store: EditAddressUIStore }) {
    let { store } = props
    let state = store.currentState
    let navigate = useNavigate()
    let [error, setError] = useState<string>()

    useEffect(() => {
        store.didSetEffect = effect => {
            if (effect instanceof EditAddressUIEffect.Error) setError(effect.message)
            if (effect == EditAddressUIEffect.Successes) navigate("/addresses")
        }
        return () => {
            store.didSetEffect = null
        }
    })

    return <div>
        <ErrorModal error={error} open={error != undefined} onClose={() => setError(undefined)} />
        <FlexboxGrid justify="center" style={{ marginTop: 150 }}>
            <FlexboxGrid.Item style={{ width: 500 }}>
                <Panel header={<h3>Edit Address</h3>} bordered>
                    <Form fluid>
                        {
                            state.getFields().map(field =>
                                <InputForm field={field} onChange={value => store.updateField(field.type, value)} />
                            )
                        }
                        <Form.Group>
                            <ButtonToolbar>
                                <Button appearance="primary" onClick={() => store.updateAddress()}>Updare</Button>
                                <Button appearance="primary" color="red" onClick={() => store.removeAddress()}>Remove</Button>
                            </ButtonToolbar>
                        </Form.Group>
                    </Form>
                </Panel>
            </FlexboxGrid.Item>
        </FlexboxGrid>
        {
            state.isLoading && <FullScreenLoader />
        }
    </div>
}