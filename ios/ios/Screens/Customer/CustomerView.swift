import SwiftUI
import Router
import core

struct CustomerView: View {
    @EnvironmentObject private var navigator: Navigator
    private let store: CustomerUIStore
    @UIState private var state: CustomerUIState
    @UIState private var isPresentedLogoutAlert = false
    
    init(store: CustomerUIStore = getStore()) {
        self.store = store
        state = store.currentState
    }
    
    var body: some View {
        Group {
            if state.isLoggedIn {
                ZStack {
                    List {
                        CustomerListCell("Account") {
                            navigator.navigate("account")
                        }
                        CustomerListCell("Addresses") {
                            navigator.navigate("addresses")
                        }
                        CustomerListCell("Orders") {
                            navigator.navigate("orders")
                        }
                    }
                    if state.isLoading {
                        FullScreenLoader()
                    }
                }
                .alert(isPresented: $isPresentedLogoutAlert) {
                    LogoutAlert {
                        store.logout()
                    }
                }
            } else {
                VStack(spacing: 20) {
                    Button("Login") {
                        navigator.navigate("login")
                    }
                    .tint(.blue)
                    Button("Register") {
                        navigator.navigate("signup")
                    }
                    .tint(.blue)
                }
                .frame(maxWidth: .infinity, maxHeight: .infinity)
                .background(Color.porcelain)
            }
        }
        .tint(.blue)
        .navigationTitle("Customer".uppercased())
        .navigationBarItems(
            leading: state.isLoggedIn
            ? AnyView(Button("Logout") {
                isPresentedLogoutAlert = true
            })
            : AnyView(EmptyView())
        )
        .bind(store, state: $state)
    }
}
