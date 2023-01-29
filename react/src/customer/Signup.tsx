import { FlexboxGrid, Panel, Form, Button } from "rsuite"
import "../core.extensions"
import core from "../shop-core/Shop-core"
import shop = core.me.haymob.shop
import SignupUIStore = shop.ui.customer.signup.SignupUIStore
import SignupUIEffect = shop.ui.customer.signup.SignupUIEffect
import InputForm from "../components/InputForm"
import FullScreenLoader from "../components/FullScreenLoader"
import ErrorModal from "../components/ErrorModal"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useStoreState from "../hooks/use_store_state"
import useStoreEffect from "../hooks/use_store_effect"

export default () => <Signup store={shop.signupUIStore()} />

interface SignupProps {
    store: SignupUIStore
}

function Signup({ store }: SignupProps) {
    const state = useStoreState(store)
    const navigate = useNavigate()
    const [error, setError] = useState<string>()

    useStoreEffect(store, effect => {
        if (effect instanceof SignupUIEffect.Error) setError(effect.message)
        if (effect == SignupUIEffect.Successes) navigate("/")
    })

    return <div>
        <ErrorModal error={error} open={error != undefined} onClose={() => setError(undefined)} />
        <FlexboxGrid justify="center" style={{ marginTop: 150 }}>
            <FlexboxGrid.Item style={{ width: 500 }}>
                <Panel header={<h3>Register</h3>} bordered>
                    <Form fluid>
                        {
                            state.getFields().map(field =>
                                <InputForm field={field} onChange={value => store.updateField(field.type, value)} />
                            )
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