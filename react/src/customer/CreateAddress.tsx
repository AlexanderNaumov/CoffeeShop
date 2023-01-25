import { FlexboxGrid, Panel, Form, Button } from "rsuite"
import "../core.extensions"
import core from "../coffee-shop-core/CoffeeShop-core"
import coffeeshop = core.me.haymob.coffeeshop
import CreateAddressUIStore = coffeeshop.ui.customer.address.create.CreateAddressUIStore
import CreateAddressUIEffect = coffeeshop.ui.customer.address.create.CreateAddressUIEffect
import InputForm from "../components/InputForm"
import FullScreenLoader from "../components/FullScreenLoader"
import ErrorModal from "../components/ErrorModal"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useStoreState from "../hooks/use_store_state"
import useStoreEffect from "../hooks/use_store_effect"

export default () => <CreateAddress store={coffeeshop.createAddressUIStore()} />

interface CreateAddressProps {
    store: CreateAddressUIStore
}

function CreateAddress({ store }: CreateAddressProps) {
    const state = useStoreState(store)
    const navigate = useNavigate()
    const [error, setError] = useState<string>()

    useStoreEffect(store, effect => {
        if (effect instanceof CreateAddressUIEffect.Error) setError(effect.message)
        if (effect == CreateAddressUIEffect.Successes) navigate("/addresses")
    })

    return <div>
        <ErrorModal error={error} open={error != undefined} onClose={() => setError(undefined)} />
        <FlexboxGrid justify="center" style={{ marginTop: 150 }}>
            <FlexboxGrid.Item style={{ width: 500 }}>
                <Panel header={<h3>New Address</h3>} bordered>
                    <Form fluid>
                        {
                            state.getFields().map(field =>
                                <InputForm key={field.type.name} field={field} onChange={value => store.updateField(field.type, value)} />
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