import { FlexboxGrid, Panel, Form, Button, Modal } from "rsuite"
import "../core.extensions"
import { useStateFromStore } from "../hooks/Hooks"
import core from "../coffee-shop-core/CoffeeShop-core"
import coffeeshop = core.me.haymob.coffeeshop
import SignupUIStore = coffeeshop.ui.customer.signup.SignupUIStore
import SignupUIEffect = coffeeshop.ui.customer.signup.SignupUIEffect
import InputForm from "../InputForm"
import FullScreenLoader from "../FullScreenLoader"
import Colors from "../Colors"
import { Component, useState } from "react"
import { useNavigate } from "react-router-dom"

export default class Signup extends Component {
    private store = coffeeshop.signupUIStore()
    render() {
        return <SignupContent store={this.store} />
    }
}

function SignupContent(props: { store: SignupUIStore }) {
    let { store } = props
    let state = useStateFromStore(store)
    let navigate = useNavigate()
    let [error, setError] = useState<string>()

    store.onEffect(effect => {
        if (effect instanceof SignupUIEffect.Error) setError(effect.message)
        if (effect == SignupUIEffect.Successes) navigate("/")
    })

    return <div style={{ width: "100%", top: 56, bottom: 0, position: "absolute", background: Colors.porcelain, zIndex: "-1" }}>
        <Modal open={error != undefined} onClose={() => setError(undefined)}>
            <Modal.Header>
                <Modal.Title>Error</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ color: "red" }}>{error}</Modal.Body>
        </Modal>
        <FlexboxGrid justify="center" style={{ marginTop: 200 }}>
            <FlexboxGrid.Item style={{ width: 500 }}>
                <Panel header={<h3>Register</h3>} bordered>
                    <Form fluid>
                        {
                            state.getFields().map(field => InputForm(field, value => store.updateField(field.type, value)))
                        }
                        <Form.Group>
                            <Button appearance="primary" onClick={() => store.signup()}>Sign up</Button>
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