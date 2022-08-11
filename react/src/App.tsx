import "rsuite/styles/index.less"
import { Container, Header, Content, Navbar, Nav, Drawer, Stack, Button } from "rsuite"
import { useEffect, useState } from "react"
import Catalog from "./catalog/Catalog"
import Login from "./customer/Login"
import Signup from "./customer/Signup"
import { Route, Routes, useNavigate } from "react-router-dom"
import ProductDetail from "./catalog/ProductDetail"
import core from "./coffee-shop-core/CoffeeShop-core"
import coffeeshop = core.me.haymob.coffeeshop
import Colors from "./Colors"
import basket from "./resources/basket.svg"
import Cart from "./cart/Cart"
import CloseIcon from "@rsuite/icons/Close"

export default function App() {
    let navigate = useNavigate()
    let [openCart, setOpenCart] = useState(false)
    let combineStore = coffeeshop.combineStore()

    useEffect(() => {
        combineStore.load()
    }, [])

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
                        <Nav.Menu title="Customer">
                            <Nav.Item onClick={() => navigate("/login")}>Login</Nav.Item>
                            <Nav.Item onClick={() => navigate("/signup")}>Register</Nav.Item>
                        </Nav.Menu>
                    </Nav>
                </Navbar>
            </Header>
            <Content style={{ top: 56, bottom: 0, left: 0, right: 0, position: "fixed", overflowY: "auto", background: Colors.porcelain }}>
                <Routes>
                    <Route path="/" element={<Catalog />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </Content>
        </Container>
        <Drawer size="xs" placement="right" open={openCart} onClose={() => setOpenCart(false)}>
            <button onClick={() => setOpenCart(false)} style={{ background: "white", marginTop: 12, marginLeft: 12 }}>
                <Stack spacing={12}>
                    <CloseIcon style={{ fontSize: 20 }}/>
                    <div style={{fontSize: 18, fontWeight: "bold"}}>CART</div>
                </Stack>
            </button>
            <Cart />
        </Drawer>
    </div>
}