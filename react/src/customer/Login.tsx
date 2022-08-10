import { FlexboxGrid, Panel, Form, Button, Modal, Loader } from "rsuite"
import "../core.extensions"
import { useStateFromStore } from "../hooks/Hooks"
import core from "../coffee-shop-core/CoffeeShop-core"
import coffeeshop = core.me.haymob.coffeeshop
import LoginUIStore = coffeeshop.ui.customer.login.LoginUIStore
import LoginUIEffect = coffeeshop.ui.customer.login.LoginUIEffect
import Field = coffeeshop.entities.Field
import FieldType = coffeeshop.entities.FieldType
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
    let store = props.store
    let state = useStateFromStore(store)
    let navigate = useNavigate()
    let [error, setError] = useState<string>()

    store.onEffect(effect => {
        if (effect instanceof LoginUIEffect.Error) setError(effect.message)
        if (effect == LoginUIEffect.Successes) navigate("/")
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
            state.isLoading && <FullScreenLoader/>
        }
    </div>
}

function InputForm(field: Field, onChange: (value: string) => void) {
    let isPassword = field.type == FieldType.Password || field.type == FieldType.NewPassword
    return <Form.Group>
        <Form.ControlLabel>{field.type.name}</Form.ControlLabel>
        {
            isPassword ?
                <Form.Control name="password" type="password" autoComplete="off" onChange={(value: string) => onChange(value)} /> :
                <Form.Control name="name" onChange={(value: string) => {
                    console.log(value)
                    onChange(value)
                }} />
        }
        {
            field.error && <Form.HelpText style={{ color: "red" }}>{field.error}</Form.HelpText>
        }
    </Form.Group>
}

function FullScreenLoader() {
    return <div style={{ width: "100%", top: 0, bottom: 0, position: "absolute", background: "rgba(1, 1, 1, 0.2)", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Loader size="md"/>
    </div>
}