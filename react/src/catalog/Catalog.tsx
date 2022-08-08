import { Button, Container, Header, Content, Footer, Navbar, Nav, FlexboxGrid } from "rsuite"
import { useCatalogUIStore } from "../hooks/Hooks"
import core from "../coffee-shop-core/CoffeeShop-core"
import "../core.extensions"
import React from "react"
const coffeeshop = core.me.haymob.coffeeshop

const styles: React.CSSProperties = {
    padding: 20
}

const imageStyle: React.CSSProperties = {
    maxWidth: "100%",
    padding: 20
}

export function Catalog() {
    let { state } = useCatalogUIStore()

    return (
        <Container>
            <Header>
                <Navbar>
                    <Navbar.Brand>COFFEE SHOP</Navbar.Brand>
                    <Nav>
                        <Nav.Item onClick={() => { console.log("hello") }}>Catalog</Nav.Item>
                    </Nav>
                    <Nav pullRight>
                        <Nav.Menu title="Customer">
                            <Nav.Item>Login</Nav.Item>
                            <Nav.Item>Register</Nav.Item>
                        </Nav.Menu>
                    </Nav>
                </Navbar>
            </Header>
            <Content>
                <FlexboxGrid justify="center">
                    <FlexboxGrid.Item colspan={12}>
                        <FlexboxGrid>
                            {
                                state.getCategories().flatMap(category => category.getProducts().map(product => {
                                    return <FlexboxGrid.Item colspan={12} style={styles}>
                                        <img style={imageStyle} src={product.thumbnail}/>
                                        <div style={{textAlign:"center"}}>{product.name}</div>
                                    </FlexboxGrid.Item>
                                }))
                            }
                        </FlexboxGrid>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </Content>
            <Footer />
        </Container>
    )
}

