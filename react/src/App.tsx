import "rsuite/styles/index.less"
import { Container, Header, Content, Navbar, Nav, Drawer, Stack } from "rsuite"
import { useEffect, useState } from "react"
import Catalog from "./catalog/Catalog"
import Login from "./customer/Login"
import Signup from "./customer/Signup"
import Account from "./customer/Account"
import { Route, Routes, useNavigate, Navigate } from "react-router-dom"
import ProductDetail from "./catalog/ProductDetail"
import core from "./shop-core/Shop-core"
import shop = core.me.haymob.shop
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
import NeedLogin from "./components/NeedLogin"
import useStoreState from "./hooks/use_store_state"

export default () => <App store={shop.customerUIStore()} />

interface AppProps {
    store: shop.ui.customer.CustomerUIStore
}

function App({ store }: AppProps) {
    const navigate = useNavigate()
    const [isOpenCart, setOpenCart] = useState(false)
    const state = useStoreState(store)

    useEffect(() => {
        shop.startApp()
    }, [])


    const closeCart = () => setOpenCart(false)
    const openCart = () => setOpenCart(true)

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
                    <Route path="/login" element={
                        state.isLoggedIn ? <Navigate to="/" /> : <Login />
                    } />
                    <Route path="/signup" element={
                        state.isLoggedIn ? <Navigate to="/" /> : <Signup />
                    } />
                    <Route path="/account" element={
                        state.isLoggedIn ? <Account /> : <NeedLogin />
                    } />
                    <Route path="/addresses" element={
                        state.isLoggedIn ? <AddressList /> : <NeedLogin />
                    } />
                    <Route path="/addresses/create" element={
                        state.isLoggedIn ? <CreateAddress /> : <NeedLogin />
                    } />
                    <Route path="/addresses/:id" element={
                        state.isLoggedIn ? <EditAddres /> : <NeedLogin />
                    } />
                    <Route path="/checkout" element={
                        state.isLoggedIn ? <Checkout /> : <NeedLogin />
                    } />
                    <Route path="/orders" element={
                        state.isLoggedIn ? <OrderList /> : <NeedLogin />
                    } />
                    <Route path="/orders/:id" element={
                        state.isLoggedIn ? < OrderDetail openCart={openCart} /> : <NeedLogin />
                    } />
                    <Route path="/wishlist" element={
                        state.isLoggedIn ? <Wishlist /> : <NeedLogin />
                    } />
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