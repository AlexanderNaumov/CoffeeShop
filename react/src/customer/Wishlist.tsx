import { FlexboxGrid, List, Panel, Stack, IconButton } from "rsuite"
import "../core.extensions"
import core from "../coffee-shop-core/CoffeeShop-core"
import coffeeshop = core.me.haymob.coffeeshop
import WishlistUIStore = coffeeshop.ui.customer.wishlist.WishlistUIStore
import { useNavigate } from "react-router-dom"
import ProductLoader from "../components/ProductLoader"
import ProductQtyButtons from "../components/ProductQtyButtons"
import TrashIcon from "@rsuite/icons/Trash"
import SComponent from "../SComponent"

export default class Wishlist extends SComponent<WishlistUIStore> {
    protected store = coffeeshop.wishlistUIStore()
    render() {
        return <WishlistView store={this.store} />
    }
}

function WishlistView(props: { store: WishlistUIStore }) {
    let { store } = props
    let state = store.currentState
    let navigate = useNavigate()
    let wishlist = state.getWishlist()

    return <FlexboxGrid justify="center" style={{ marginTop: 50 }}>
        <FlexboxGrid.Item style={{ width: 500 }}>
            <Panel header="Wishlist" bordered style={{ background: "white" }}>
                {
                    wishlist.length > 0 ?
                        <List hover size="lg" bordered>
                            {
                                wishlist.map(product => <List.Item key={product.id} onClick={() => navigate(`/product/${product.id}`)}>
                                    <Stack justifyContent="space-between">
                                        <Stack>
                                            <img src={product.thumbnail} style={{ width: 50, height: 50, objectFit: "contain" }} />
                                            <div style={{ marginLeft: 8 }}>
                                                <div>{product.name}</div>
                                                <div style={{ fontWeight: "bold", marginTop: 2 }}>{product.price.stringValue()}</div>
                                            </div>
                                        </Stack>
                                        <Stack spacing={12}>
                                            <ProductQtyButtons size="xs" qty={product.qty} inc={() => {
                                                store.incrementProduct(product)
                                            }} dec={() => {
                                                store.decrementProduct(product)
                                            }} />
                                            <IconButton icon={<TrashIcon />} circle size="md" appearance="subtle" onClick={event => {
                                                event.stopPropagation()
                                                store.removeProductFromWishlist(product)
                                            }} />
                                        </Stack>
                                    </Stack>
                                    {
                                        product.isLoading && <ProductLoader size="sm" />
                                    }
                                </List.Item>)
                            }
                        </List> :
                        <div>is empty</div>
                }
            </Panel>

        </FlexboxGrid.Item>
    </FlexboxGrid>
}