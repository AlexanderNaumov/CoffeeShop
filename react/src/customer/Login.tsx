import { FlexboxGrid, Panel, Form, Button } from "rsuite"
import "../core.extensions"
import { useStateFromStore } from "../hooks/Hooks"
import core from "../coffee-shop-core/CoffeeShop-core"
import coffeeshop = core.me.haymob.coffeeshop
import LoginUIStore = coffeeshop.ui.customer.login.LoginUIStore
import LoginUIEffect = coffeeshop.ui.customer.login.LoginUIEffect
import InputForm from "../InputForm"
import FullScreenLoader from "../FullScreenLoader"
import ErrorModal from "../ErrorModal"
import Colors from "../Colors"
import { Component, useState } from "react"
import { useNavigate } from "react-router-dom"

export default class Login extends Component {
    private store = coffeeshop.loginUIStore()
    render() {
        return <LoginContent store={this.store} />
    }
}

function LoginContent(props: { store: LoginUIStore }) {
    let { store } = props
    let state = useStateFromStore(store)
    let navigate = useNavigate()
    let [error, setError] = useState<string>()

    store.onEffect(effect => {
        if (effect instanceof LoginUIEffect.Error) setError(effect.message)
        if (effect == LoginUIEffect.Successes) navigate("/")
    })

    return <div style={{ width: "100%", top: 56, bottom: 0, position: "absolute", background: Colors.porcelain, zIndex: "-1" }}>
        <ErrorModal error={error} open={error != undefined} onClose={() => setError(undefined)} />
        <FlexboxGrid justify="center" style={{ marginTop: 200 }}>
            <FlexboxGrid.Item style={{ width: 500 }}>
                <Panel header={<h3>Login</h3>} bordered>
                    <Form fluid>
                        {
                            state.getFields().map(field => InputForm(field, value => store.updateField(field.type, value)))
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