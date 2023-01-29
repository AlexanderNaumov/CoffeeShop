import { FlexboxGrid, Panel, Form, Button } from "rsuite"
import "../core.extensions"
import core from "../shop-core/Shop-core"
import shop = core.me.haymob.shop
import AccountUIStore = shop.ui.customer.account.AccountUIStore
import AccountUIEffect = shop.ui.customer.account.AccountUIEffect
import InputForm from "../components/InputForm"
import FullScreenLoader from "../components/FullScreenLoader"
import ErrorModal from "../components/ErrorModal"
import { useState } from "react"
import useStoreState from "../hooks/use_store_state"
import useStoreEffect from "../hooks/use_store_effect"


export default () => <Account store={shop.accountUIStore()} />

interface AccountProps {
    store: AccountUIStore
}

function Account({ store }: AccountProps) {
    const state = useStoreState(store)
    const [error, setError] = useState<string>()

    useStoreEffect(store, effect => {
        if (effect instanceof AccountUIEffect.Error) setError(effect.message)
    })

    return <div>
        <ErrorModal error={error} open={error != undefined} onClose={() => setError(undefined)} />
        <FlexboxGrid justify="center" style={{ marginTop: 150 }}>
            <FlexboxGrid.Item style={{ width: 500 }}>
                <Panel header={<h3>Account</h3>} bordered>
                    <Form fluid>
                        {
                            state.getFields().map(field =>
                                <InputForm key={field.type.name} field={field} onChange={value => store.updateField(field.type, value)} />
                            )
                        }
                        <Form.Group>
                            <Button appearance="primary" onClick={() => store.updateCustomer()}>Update</Button>
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