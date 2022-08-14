import { FlexboxGrid, Panel, Form, Button } from "rsuite"
import "../core.extensions"
import core from "../coffee-shop-core/CoffeeShop-core"
import coffeeshop = core.me.haymob.coffeeshop
import CreateAddressUIStore = coffeeshop.ui.customer.address.create.CreateAddressUIStore
import CreateAddressUIEffect = coffeeshop.ui.customer.address.create.CreateAddressUIEffect
import InputForm from "../components/InputForm"
import FullScreenLoader from "../components/FullScreenLoader"
import ErrorModal from "../components/ErrorModal"
import { Component, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default class CreateAddress extends Component {
    private store = coffeeshop.createAddressUIStore()
    constructor(props: Object) {
        super(props)
        this.store.onState(() => this.setState({}))
        
    }
    render() {
        return <CreateAddressView store={this.store} />
    }
}

function CreateAddressView(props: { store: CreateAddressUIStore }) {
    let { store } = props
    let state = store.currentState
    let navigate = useNavigate()
    let [error, setError] = useState<string>()

    useEffect(() => {
        let mount = true
        store.didSetEffect = effect => {
            if (effect instanceof CreateAddressUIEffect.Error) setError(effect.message)
            if (effect == CreateAddressUIEffect.Successes) navigate("/addresses")
        }
        return () => {
            store.didSetEffect = null
        }
    })

    return <div>
        <ErrorModal error={error} open={error != undefined} onClose={() => setError(undefined)} />
        <FlexboxGrid justify="center" style={{ marginTop: 150 }}>
            <FlexboxGrid.Item style={{ width: 500 }}>
                <Panel header={<h3>New Address</h3>} bordered>
                    <Form fluid>
                        {
                            state.getFields().map(field =>
                                <InputForm field={field} onChange={value => store.updateField(field.type, value)} />
                            )
                        }
                        <Form.Group>
                            <Button appearance="primary" onClick={() => store.createAddress()}>Create</Button>
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