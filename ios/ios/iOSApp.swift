import SwiftUI
import Router
import core

@main
struct iOSApp: App {
    
    init() {
        CoreKt.coreInit()
        CoreKt.startApp()
    }
    
    var body: some Scene {
        WindowGroup {
            let navigatior = Navigator()
            Router(navigator: navigatior) {
                TabBarView()
                    .tab("/products") {
                        NavigationView {
                            CatalogView()
                                .stack("/products/:id") { props in
                                    let productId = props["id"] ?? ""
                                    ProductDetailView(productId: productId)
                                }
                        }
                    } label: {
                        Image("shop").renderingMode(.template)
                        Text("Shop")
                    }
                    .tab("/wishlist") {
                        NavigationView {
                            WishlistView()
                                .stack("/wishlist/products/:id") { props in
                                    let productId = props["id"] ?? ""
                                    ProductDetailView(productId: productId)
                                }
                        }
                    } label: {
                        Image("wishlist").renderingMode(.template)
                        Text("Wishlist")
                    }
                    .tab("/cart") {
                        NavigationView {
                            CartView()
                                .stack("/cart/products/:id") { props in
                                    let productId = props["id"] ?? ""
                                    ProductDetailView(productId: productId)
                                }
                                .stack("/cart/checkout") {
                                    CheckoutView()
                                        .alert("/cart/checkout/success/:id") { props in
                                            let orderId = props["id"] ?? ""
                                            return OrderSuccessAlert(navigatior, orderId: orderId)
                                        }
                                        .alert("/cart/checkout/error/:error") { props in
                                            let error = props["error"]?.fromBase64() ?? ""
                                            return ErrorAlert(error)
                                        }
                                }
                        }
                    } label: {
                        Image("basket").renderingMode(.template)
                        Text("Cart")
                    }
                    .tab("/customer") {
                        NavigationView {
                            CustomerView()
                                .stack("/customer/account") {
                                    AccountView()
                                }
                                .stack("/customer/addresses") {
                                    AddressListView()
                                        .stack("/customer/addresses/create") {
                                            CreateAddressView()
                                        }
                                        .stack("/customer/addresses/edit/:id") { props in
                                            let addressId = props["id"] ?? ""
                                            EditAddresView(addressId: addressId)
                                        }
                                }
                                .stack("/customer/orders") {
                                    OrderListView()
                                        .stack("/customer/orders/:id") { props in
                                            let orderId = props["id"] ?? ""
                                            OrderDetailView(orderId: orderId)
                                        }
                                }
                                .alert("/customer/error/:error") { props in
                                    let error = props["error"]?.fromBase64() ?? ""
                                    return ErrorAlert(error)
                                }
                                .sheet("/customer/login") {
                                    NavigationView {
                                        LoginView()
                                            .alert("/customer/login/error/:error") { props in
                                                let error = props["error"]?.fromBase64() ?? ""
                                                return ErrorAlert(error)
                                            }
                                    }
                                }
                                .sheet("/customer/signup") {
                                    NavigationView {
                                        SignupView()
                                            .alert("/customer/signup/error/:error") { props in
                                                let error = props["error"]?.fromBase64() ?? ""
                                                return ErrorAlert(error)
                                            }
                                    }
                                }
                        }
                    } label: {
                        Image("customer").renderingMode(.template)
                        Text("Customer")
                    }
                    .accentColor(.black)
            }
        }
    }
}
