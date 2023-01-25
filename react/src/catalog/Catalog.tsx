import { FlexboxGrid } from "rsuite"
import "../core.extensions"
import Colors from "../Colors"
import { useNavigate } from "react-router-dom"
import core from "../coffee-shop-core/CoffeeShop-core"
import coffeeshop = core.me.haymob.coffeeshop
import CatalogUIStore = coffeeshop.ui.catalog.CatalogUIStore
import ProductQtyButtons from "../components/ProductQtyButtons"
import ProductLoader from "../components/ProductLoader"
import useStoreState from "../hooks/use_store_state"

export default () => <Catalog store={coffeeshop.catalogUIStore()} />

interface CatalogProps {
    store: CatalogUIStore
}

function Catalog({ store }: CatalogProps) {
    const state = useStoreState(store)
    const navigate = useNavigate()

    return <FlexboxGrid justify="center">
        <FlexboxGrid.Item style={{ width: 700 }}>
            <FlexboxGrid>
                {
                    state.getCategories().flatMap(category =>
                        category.getProducts().map(product =>
                            <FlexboxGrid.Item key={product.id} colspan={12} onClick={() => navigate(`product/${product.id}`)}>
                                <div style={{ margin: 20, padding: 8, background: "white", borderRadius: 30 }}>
                                    <div style={{ background: Colors.gallery, borderRadius: 30, aspectRatio: "1", display: "flex", justifyContent: "center" }}>
                                        <img style={{ width: "80%" }} src={product.thumbnail} />
                                    </div>
                                    <div style={{ fontSize: 18, textAlign: "center", marginTop: 8 }}>{product.name}</div>
                                    <div style={{ fontSize: 18, fontWeight: "bold", textAlign: "center", marginTop: 8 }}>{product.price.stringValue()}</div>
                                    <div style={{ marginTop: 8, display: "flex", justifyContent: "center" }}>
                                        <ProductQtyButtons qty={product.qty} inc={() => store.incrementProduct(product)} dec={() => store.decrementProduct(product)} />
                                    </div>
                                    {
                                        product.isLoading && <ProductLoader padding={20} borderRadius={30} />
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
