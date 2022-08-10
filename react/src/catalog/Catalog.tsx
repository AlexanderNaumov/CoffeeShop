import { IconButton, FlexboxGrid, Stack, Loader } from "rsuite"
import PlusIcon from '@rsuite/icons/Plus'
import MinusIcon from '@rsuite/icons/Minus'
import { useStateFromStore } from "../hooks/Hooks"
import "../core.extensions"
import Colors from "../Colors"
import { Component, useEffect } from "react"
import core from "../coffee-shop-core/CoffeeShop-core"
import coffeeshop = core.me.haymob.coffeeshop
import CatalogUIStore = coffeeshop.ui.catalog.CatalogUIStore


export default class Catalog extends Component {
    private store = coffeeshop.catalogUIStore()
    render() {
        return <CatalogContent store={this.store} />
    }
}

function CatalogContent(props: { store: CatalogUIStore }) {
    let { store } = props
    let state = useStateFromStore(store)

    useEffect(() => {
        store.loadCatalog()
    }, [])

    return <FlexboxGrid justify="center" style={{ background: Colors.porcelain }}>
        <FlexboxGrid.Item style={{ width: 700 }}>
            <FlexboxGrid>
                {
                    state.getCategories().flatMap(category =>
                        category.getProducts().map(product =>
                            <FlexboxGrid.Item colspan={12}>
                                <div style={{ margin: 20, padding: 8, background: "white", borderRadius: 30 }}>
                                    <div style={{ background: Colors.gallery, borderRadius: 30, aspectRatio: "1", display: "flex", justifyContent: "center" }}>
                                        <img style={{ width: "80%" }} src={product.thumbnail} />
                                    </div>
                                    <div style={{ fontSize: 18, textAlign: "center", marginTop: 8 }}>{product.name}</div>
                                    <div style={{ fontSize: 18, fontWeight: "bold", textAlign: "center", marginTop: 8 }}>{product.price.stringValue()}</div>
                                    <div style={{ marginTop: 8, display: "flex", justifyContent: "center" }}>
                                        {
                                            product.qty == 0 ?
                                                <IconButton icon={<PlusIcon />} style={{ width: 100 }} onClick={() => store.incrementProduct(product)} /> :
                                                <Stack spacing={16}>
                                                    <IconButton icon={<PlusIcon />} onClick={() => store.incrementProduct(product)} />
                                                    <div style={{ fontSize: 20 }}>{product.qty}</div>
                                                    <IconButton icon={<MinusIcon />} onClick={() => store.decrementProduct(product)} />
                                                </Stack>

                                        }
                                    </div>
                                    {
                                        product.isLoading && <div style={{ top: 0, left: 0, width: "100%", height: "100%", padding: 20, position: "absolute" }}>
                                            <div style={{ background: "rgba(1, 1, 1, 0.05)", width: "100%", height: "100%", borderRadius: 30, display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                <Loader size="md" />
                                            </div>
                                        </div>
                                    }
                                </div>
                            </FlexboxGrid.Item>
                        )
                    )
                }
            </FlexboxGrid>
        </FlexboxGrid.Item>
    </FlexboxGrid>
}

