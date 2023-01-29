import { FlexboxGrid, Panel, Form, Button, ButtonToolbar } from "rsuite"
import "../core.extensions"
import core from "../shop-core/Shop-core"
import shop = core.me.haymob.shop
import EditAddressUIStore = shop.ui.customer.address.edit.EditAddressUIStore
import EditAddressUIEffect = shop.ui.customer.address.edit.EditAddressUIEffect
import InputForm from "../components/InputForm"
import FullScreenLoader from "../components/FullScreenLoader"
import ErrorModal from "../components/ErrorModal"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import useStoreState from "../hooks/use_store_state"
import useStoreEffect from "../hooks/use_store_effect"


export default () => {
    const addressId = useParams().id as string
    return < EditAddres store={shop.editAddressUIStore(addressId)} />
}

interface EditAddresProps {
    store: EditAddressUIStore
}

function EditAddres({ store }: EditAddresProps) {
    const state = useStoreState(store)
    const navigate = useNavigate()
    const [error, setError] = useState<string>()

    useStoreEffect(store, effect => {
        if (effect instanceof EditAddressUIEffect.Error) setError(effect.message)
        if (effect == EditAddressUIEffect.Successes) navigate("/addresses")
    })

    return <div>
        <ErrorModal error={error} open={error != undefined} onClose={() => setError(undefined)} />
        <FlexboxGrid justify="center" style={{ marginTop: 150 }}>
            <FlexboxGrid.Item style={{ width: 500 }}>
                <Panel header={<h3>Edit Address</h3>} bordered>
                    <Form fluid>
                        {
                            state.getFields().map(field =>
                                <InputForm key={field.type.name} field={field} onChange={value => store.updateField(field.type, value)} />
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