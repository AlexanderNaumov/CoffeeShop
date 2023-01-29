import { FlexboxGrid, List, Panel, Button } from "rsuite"
import "../core.extensions"
import core from "../shop-core/Shop-core"
import shop = core.me.haymob.shop
import AddressListUIStore = shop.ui.customer.address.list.AddressListUIStore
import { useNavigate } from "react-router-dom"
import useStoreState from "../hooks/use_store_state"

export default () => <AddressList store={shop.addressListUIStore()} />

interface AddressListProps {
    store: AddressListUIStore
}

function AddressList({ store }: AddressListProps) {
    const state = useStoreState(store)
    const navigate = useNavigate()
    const addresses = state.getAddresses()

    return <FlexboxGrid justify="center" style={{ marginTop: 50 }}>
        <FlexboxGrid.Item style={{ width: 500 }}>
            <Panel header={
                <Button onClick={() => navigate("create")}>New Address</Button>
            } bordered style={{ background: "white" }}>
                {addresses.length > 0 ?
                    <List hover size="lg" bordered>
                        {
                            addresses.map(address => <List.Item key={address.id} onClick={() => navigate(`${address.id}`)}>
                                <div style={{ fontSize: 15 }}>
                                    <div>{address.firstName} {address.lastName}</div>
                                    <div>{address.city}, {address.street}, {address.postcode}</div>
                                </div>
                            </List.Item>)
                        }
                    </List> :
                    <div></div>
                }

            </Panel>

        </FlexboxGrid.Item>
    </FlexboxGrid>
}