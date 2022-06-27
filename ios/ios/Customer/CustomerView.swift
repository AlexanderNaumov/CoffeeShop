import SwiftUI
import core

struct CustomerView: View {
    @EnvironmentObject var router: Router
    @Store var store: CustomerUIStore
    
    var body: some View {
        Group {
            if store.currentState.isLoggedIn {
                ZStack {
                    List {
                        CustomerListCell("Account") {
                            router.open(AccountRoute())
                        }
                        CustomerListCell("Addresses") {
                            router.open(AddressListRoute())
                        }
                        CustomerListCell("Orders") {
                            router.open(OrderListRoute())
                        }
                    }
                    if store.currentState.isLoading {
                        FullScreenLoader()
                    }
                }
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
        .navigationTitle("Customer".uppercased())
        .navigationBarItems(
            leading: store.currentState.isLoggedIn ? AnyView(Button("Logout") {
                router.open(AlertRoute(alert: logoutAlert {
                    store.logout()
                }))
            }) : AnyView(EmptyView())
        )
    }
}

private func CustomerListCell(_ title: String, tap: @escaping () -> Void) -> some View {
    HStack {
        Button {
            tap()
        } label: {
            Text(title)
        }.tint(.black)
        Spacer()
        Image("next")
    }
}

private func logoutAlert(action: @escaping () -> Void) -> Alert {
    Alert(
        title: "Logout",
        message: "Do you want to leave?",
        primaryButton: .cancel(),
        secondaryButton: .default("Logout", action: action)
    )
}
