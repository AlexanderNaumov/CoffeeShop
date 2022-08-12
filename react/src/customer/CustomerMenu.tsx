import { Nav, Modal, Button } from "rsuite"
import { Component, useState } from "react"
import { useNavigate } from "react-router-dom"
import core from "../coffee-shop-core/CoffeeShop-core"
import coffeeshop = core.me.haymob.coffeeshop
import CustomerUIStore = coffeeshop.ui.customer.CustomerUIStore

export default class CustomerMenu extends Component {
    private store = coffeeshop.customerUIStore()

    constructor(props: Object) {
        super(props)
        this.store.onState(() => this.setState({}))
    }

    render() {
        return <CustomerMenuContent store={this.store} />
    }
}

function CustomerMenuContent(props: { store: CustomerUIStore }) {
    let { store } = props
    let state = store.currentState
    let navigate = useNavigate()
    let [logout, setLogout] = useState(false)

    let closeLogout = () => {
        setLogout(false)
    }
    return state.isLoggedIn ?
        <div>
            <Modal open={logout} onClose={closeLogout}>
                <Modal.Header>
                    <Modal.Title>Logout</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you want to leave?</Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => {
                        store.logout()
                        closeLogout()
                    }} appearance="primary">Logout</Button>
                    <Button onClick={closeLogout} appearance="subtle">Cancel</Button>
                </Modal.Footer>
            </Modal>
            <Nav.Menu title="Customer">
                <Nav.Item onClick={() => navigate("/account")} style={{ width: 150 }}>Account</Nav.Item>
                <Nav.Item onClick={() => navigate("/addresses")} >Addresses</Nav.Item>
                <Nav.Item onClick={() => navigate("/wishlist")} >Wishlist</Nav.Item>
                <Nav.Item onClick={() => navigate("/orders")} >Orders</Nav.Item>
                <Nav.Item onClick={() => { setLogout(true) }}>Logout</Nav.Item>
            </Nav.Menu>
        </div> :
        <Nav.Menu title="Customer">
            <Nav.Item onClick={() => navigate("/login")} style={{ width: 150 }}>Login</Nav.Item>
            <Nav.Item onClick={() => navigate("/signup")}>Register</Nav.Item>
        </Nav.Menu>
}