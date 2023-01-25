import { Nav, Modal, Button } from "rsuite"
import { Component, useState } from "react"
import { useNavigate } from "react-router-dom"
import core from "../coffee-shop-core/CoffeeShop-core"
import coffeeshop = core.me.haymob.coffeeshop
import CustomerUIStore = coffeeshop.ui.customer.CustomerUIStore
import useStoreState from "../hooks/use_store_state"

export default () => <CustomerMenu store={coffeeshop.customerUIStore()} />

interface CustomerMenuProps {
    store: CustomerUIStore
}

function CustomerMenu({ store }: CustomerMenuProps) {
    const state = useStoreState(store)
    const navigate = useNavigate()
    const [logout, setLogout] = useState(false)

    const closeLogout = () => {
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
                        navigate("/")
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