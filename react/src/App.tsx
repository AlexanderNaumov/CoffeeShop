import "rsuite/styles/index.less"
import { Container, Header, Content, Footer, Navbar, Nav } from "rsuite"
import Catalog from "./catalog/Catalog"
import Login from "./customer/Login"
import Signup from "./customer/Signup"
import { Route, Routes, useNavigate } from "react-router-dom"

export default function App() {
    let navigate = useNavigate()
    return <Container>
        <Header style={{ position: "sticky", top: 0 }}>
            <Navbar>
                <Navbar.Brand onClick={() => navigate("/")}>COFFEE SHOP</Navbar.Brand>
                <Nav>
                    <Nav.Item onClick={() => { console.log("hello") }}>Coffee</Nav.Item>
                </Nav>
                <Nav pullRight>
                    <Nav.Menu title="Customer">
                        <Nav.Item onClick={() => navigate("/login")}>Login</Nav.Item>
                        <Nav.Item onClick={() => navigate("/signup")}>Register</Nav.Item>
                    </Nav.Menu>
                </Nav>
            </Navbar>
        </Header>
        <Content>
            <Routes>
                <Route path="/" element={<Catalog />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
            </Routes>
        </Content>
    </Container>
}