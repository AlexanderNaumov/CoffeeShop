import "rsuite/styles/index.less"
import { Container, Header, Content, Navbar, Nav, Drawer, Stack, Animation } from "rsuite"
import { useEffect, useState } from "react"
import Catalog from "./catalog/Catalog"
import Login from "./customer/Login"
import Signup from "./customer/Signup"
import Account from "./customer/Account"
import { Route, Routes, useNavigate } from "react-router-dom"
import ProductDetail from "./catalog/ProductDetail"
import core from "./coffee-shop-core/CoffeeShop-core"
import coffeeshop = core.me.haymob.coffeeshop
import Colors from "./Colors"
import basket from "./resources/basket.svg"
import Cart from "./cart/Cart"
import CloseIcon from "@rsuite/icons/Close"
import CustomerMenu from "./customer/CustomerMenu"
import AddressList from "./customer/AddressList"
import CreateAddress from "./customer/CreateAddress"
import EditAddres from "./customer/EditAddres"
import Checkout from "./cart/Checkout"
import OrderList from "./customer/OrderList"
import OrderDetail from "./customer/OrderDetail"
import Wishlist from "./customer/Wishlist"

export default function App() {
    let navigate = useNavigate()
    let [isOpenCart, setOpenCart] = useState(false)
    let combineStore = coffeeshop.combineStore()

    useEffect(() => {
        combineStore.load()
    }, [])

    let closeCart = () => setOpenCart(false)
    let openCart = () => setOpenCart(true)

    return <div>
        <Container>
            <Header style={{ position: "sticky", top: 0, zIndex: 100 }}>
                <Navbar>
                    <Navbar.Brand onClick={() => navigate("/")}>COFFEE SHOP</Navbar.Brand>
                    <Nav pullRight style={{ marginRight: 16 }}>
                        <Nav.Item icon={
                            <img src={basket} style={{ marginRight: 12 }} />
                        } style={{ width: 100 }} onClick={() => setOpenCart(true)}>Cart</Nav.Item>
                    </Nav>
                    <Nav pullRight>
                        <CustomerMenu />
                    </Nav>
                </Navbar>
            </Header>
            <Content style={{ top: 56, bottom: 0, left: 0, right: 0, position: "fixed", overflowY: "auto", background: Colors.porcelain }}>
                <Routes>
                    <Route path="/" element={<Catalog />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/addresses" element={<AddressList />} />
                    <Route path="/addresses/create" element={<CreateAddress />} />
                    <Route path="/addresses/:id" element={<EditAddres />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/orders" element={<OrderList />} />
                    <Route path="/orders/:id" element={< OrderDetail openCart={openCart} />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                </Routes>
            </Content>
        </Container>
        <Drawer size="xs" placement="right" open={isOpenCart} onClose={() => setOpenCart(false)}>
            <button onClick={() => setOpenCart(false)} style={{ background: "white", marginTop: 12, marginLeft: 12 }}>
                <Stack spacing={12}>
                    <CloseIcon style={{ fontSize: 20 }} />
                    <div style={{ fontSize: 18, fontWeight: "bold" }}>CART</div>
                </Stack>
            </button>
            <Cart closeCart={closeCart} />
        </Drawer>
    </div>
}