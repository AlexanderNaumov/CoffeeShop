import { IconButton, Container, Header, Content, Footer, Navbar, Nav, FlexboxGrid, Stack, Loader } from "rsuite"
import PlusIcon from '@rsuite/icons/Plus'
import MinusIcon from '@rsuite/icons/Minus'
import { useCatalogUIStore } from "../hooks/Hooks"
// import core from "../coffee-shop-core/CoffeeShop-core"
import "../core.extensions"
import Colors from "../Colors"
// import React from "react"
// const coffeeshop = core.me.haymob.coffeeshop


// const imageStyle: React.CSSProperties = {
//     maxWidth: "100%",
//     padding: 20
// }

export function Catalog() {
    let { incrementProduct, decrementProduct, state } = useCatalogUIStore()

    return (
        <Container>
            <Header style={{position:"sticky", top:0}}>
                <Navbar>
                    <Navbar.Brand>COFFEE SHOP</Navbar.Brand>
                    <Nav>
                        <Nav.Item onClick={() => { console.log("hello") }}>Coffee</Nav.Item>
                    </Nav>
                    <Nav pullRight>
                        <Nav.Menu title="Customer">
                            <Nav.Item>Login</Nav.Item>
                            <Nav.Item>Register</Nav.Item>
                        </Nav.Menu>
                    </Nav>
                </Navbar>
            </Header>
            <Content style={{ background: Colors.porcelain }}>
                <FlexboxGrid justify="center">
                    <FlexboxGrid.Item style={{ maxWidth: "700px" }}>
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
                                                            <IconButton icon={<PlusIcon />} style={{ width: 100 }} onClick={() => incrementProduct(product)} /> :
                                                            <Stack spacing={16}>
                                                                <IconButton icon={<PlusIcon />} onClick={() => incrementProduct(product)} />
                                                                <div style={{ fontSize: 20 }}>{product.qty}</div>
                                                                <IconButton icon={<MinusIcon />} onClick={() => decrementProduct(product)} />
                                                            </Stack>

                                                    }
                                                </div>
                                                {
                                                    product.isLoading && <div style={{ top: 0, left: 0, width: "100%", height: "100%", padding: 20, position: "absolute" }}>
                                                        <div style={{ background: "rgba(1, 1, 1, 0.2)", width: "100%", height: "100%", borderRadius: 30, display: "flex", justifyContent: "center", alignItems: "center" }}>
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
            </Content>
            <Footer />
        </Container>
    )
}

