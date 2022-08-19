import { FlexboxGrid, Panel, Form, Button } from "rsuite"
import "../core.extensions"
import core from "../coffee-shop-core/CoffeeShop-core"
import coffeeshop = core.me.haymob.coffeeshop
import AccountUIStore = coffeeshop.ui.customer.account.AccountUIStore
import AccountUIEffect = coffeeshop.ui.customer.account.AccountUIEffect
import InputForm from "../components/InputForm"
import FullScreenLoader from "../components/FullScreenLoader"
import ErrorModal from "../components/ErrorModal"
import { useState } from "react"
import SComponent from "../SComponent"

export default class Account extends SComponent<AccountUIStore> {
    protected store = coffeeshop.accountUIStore()
    render() {
        return <AccountView store={this.store} />
    }
}

function AccountView(props: { store: AccountUIStore }) {
    let { store } = props
    let state = store.currentState
    let [error, setError] = useState<string>()

    store.onEffect(effect => {
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