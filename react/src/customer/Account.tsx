import { FlexboxGrid, Panel, Form, Button } from "rsuite"
import "../core.extensions"
import core from "../coffee-shop-core/CoffeeShop-core"
import coffeeshop = core.me.haymob.coffeeshop
import AccountUIStore = coffeeshop.ui.customer.account.AccountUIStore
import AccountUIEffect = coffeeshop.ui.customer.account.AccountUIEffect
import InputForm from "../components/InputForm"
import FullScreenLoader from "../components/FullScreenLoader"
import ErrorModal from "../components/ErrorModal"
import { Component, useState } from "react"

export default class Account extends Component {
    private store = coffeeshop.accountUIStore()
    constructor(props: Object) {
        super(props)
        this.store.onState(() => this.setState({}))
    }
    render() {
        return <AccountContent store={this.store} />
    }
}

function AccountContent(props: { store: AccountUIStore }) {
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
                                <InputForm field={field} onChange={value => store.updateField(field.type, value)} />
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