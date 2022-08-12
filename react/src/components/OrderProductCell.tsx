import { List, Stack } from "rsuite"
import core from "../coffee-shop-core/CoffeeShop-core"
import coffeeshop = core.me.haymob.coffeeshop
import Product = coffeeshop.entities.Product

export default function OrderProductCell(props: { product: Product }) {
    let { product } = props
    return <List.Item>
    <Stack justifyContent="space-between">
        <Stack>
            <img src={product.thumbnail} style={{ width: 50, height: 50, objectFit: "contain" }} />
            <div style={{ marginLeft: 8 }}>
                <div>{product.name}</div>
                <div style={{ fontWeight: "bold", marginTop: 2 }}>{product.price.stringValue()}</div>
            </div>
        </Stack>
        <div style={{ fontSize: 18 }}>{product.qty}x</div>
    </Stack>
</List.Item>
}