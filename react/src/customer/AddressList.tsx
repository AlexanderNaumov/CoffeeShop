import { FlexboxGrid, List, Panel, Button } from "rsuite"
import "../core.extensions"
import core from "../coffee-shop-core/CoffeeShop-core"
import coffeeshop = core.me.haymob.coffeeshop
import AddressListUIStore = coffeeshop.ui.customer.address.list.AddressListUIStore
import { Component } from "react"
import { useNavigate } from "react-router-dom"

export default class AddressList extends Component {
    private store = coffeeshop.addressListUIStore()
    constructor(props: Object) {
        super(props)
        this.store.onState(() => this.setState({}))
    }
    render() {
        return <AddressListContent store={this.store} />
    }
}

function AddressListContent(props: { store: AddressListUIStore }) {
    let { store } = props
    let state = store.currentState
    let navigate = useNavigate()

    return <FlexboxGrid justify="center" style={{ marginTop: 50 }}>
        <FlexboxGrid.Item style={{ width: 500 }}>
            <Panel header={
                <Button onClick={() => navigate("create")}>New Address</Button>
            } bordered style={{background: "white"}}>
                <List hover size="lg" bordered>
                    {
                        state.getAddresses().map(address => <List.Item onClick={() => navigate(`${address.id}`)}>
                            <div style={{ fontSize: 15 }}>
                                <div>{address.firstName} {address.lastName}</div>
                                <div>{address.city}, {address.street}, {address.postcode}</div>
                            </div>
                        </List.Item>)
                    }
                </List>
            </Panel>

        </FlexboxGrid.Item>
    </FlexboxGrid>
}