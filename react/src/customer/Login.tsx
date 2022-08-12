import { FlexboxGrid, Panel, Form, Button } from "rsuite"
import "../core.extensions"
import core from "../coffee-shop-core/CoffeeShop-core"
import coffeeshop = core.me.haymob.coffeeshop
import LoginUIStore = coffeeshop.ui.customer.login.LoginUIStore
import LoginUIEffect = coffeeshop.ui.customer.login.LoginUIEffect
import InputForm from "../components/InputForm"
import FullScreenLoader from "../components/FullScreenLoader"
import ErrorModal from "../components/ErrorModal"
import { Component, useState } from "react"
import { useNavigate } from "react-router-dom"

export default class Login extends Component {
    private store = coffeeshop.loginUIStore()
    constructor(props: Object) {
        super(props)
        this.store.onState(() => this.setState({}))
    }
    render() {
        return <LoginContent store={this.store} />
    }
}

function LoginContent(props: { store: LoginUIStore }) {
    let { store } = props
    let state = store.currentState
    let navigate = useNavigate()
    let [error, setError] = useState<string>()

    store.onEffect(effect => {
        if (effect instanceof LoginUIEffect.Error) setError(effect.message)
        if (effect == LoginUIEffect.Successes) navigate("/")
    })

    return <div>
        <ErrorModal error={error} open={error != undefined} onClose={() => setError(undefined)} />
        <FlexboxGrid justify="center" style={{ marginTop: 150 }}>
            <FlexboxGrid.Item style={{ width: 500 }}>
                <Panel header={<h3>Login</h3>} bordered>
                    <Form fluid>
                        {
                            state.getFields().map(field =>
                                <InputForm field={field} onChange={value => store.updateField(field.type, value)} />
                            )
                        }
                        <Form.Group>
                            <Button appearance="primary" onClick={() => store.login()}>Sign in</Button>
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