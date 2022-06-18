import SwiftUI
import core

struct CustomerView: View {
    @Store var store: CustomerUIStore
    @SwiftUI.State var isPresentingLogoutAlert: Bool = false
    
    var body: some View {
        NavigationView {
            RouterView { router in
                Group {
                    if store.currentState.isLoggedIn {
                        ZStack {
                            List {
                                HStack {
                                    Button("Account") {
                                        router.open(AccountRoute())
                                    }
                                    Spacer()
                                    Text(">")
                                }
                                HStack {
                                    Button("Addresses") {
                                        router.open(AddressListRoute())
                                    }
                                    Spacer()
                                    Text(">")
                                }
                                HStack {
                                    Button("Wishlist") {
                                        router.open(WishlistRoute())
                                    }
                                    Spacer()
                                    Text(">")
                                }
                            }
                            if store.currentState.isLoading {
                                VStack {
                                    ProgressView()
                                        .tint(.black)
                                }
                            }
                        }.navigationBarItems(leading: Button("Logout") {
                            isPresentingLogoutAlert = true
                        })
                    } else {
                        VStack(spacing: 20) {
                            Button("Login") {
                                router.open(LoginRoute())
                            }
                            .tint(.blue)
                            
                            Button("Register") {
                                router.open(SignupRoute())
                            }
                            .tint(.blue)
                        }
                    }
                }
                .tint(.blue)
                .alert(isPresented: $isPresentingLogoutAlert, content: {
                    Alert(
                        title: Text("Logout"),
                        message: Text("Do you want to leave?"),
                        primaryButton: .cancel(),
                        secondaryButton: .default(Text("Logout"), action: {
                            store.logout()
                        }))
                })
                .navigationTitle("Customer".uppercased())
            }
            .ignoresSafeArea()
            .navigationBarItems(
                leading: store.currentState.isLoggedIn ? AnyView(Button("Logout") {
                    isPresentingLogoutAlert = true
                }) : AnyView(EmptyView())
            )
        }.tabItem {
            Text("Customer")
        }
    }
}
