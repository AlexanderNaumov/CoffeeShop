import SwiftUI
import core

struct CustomerView: View {
    
    @Store var store: CustomerUIStore
    @Binding var router: Routing?
    @SwiftUI.State var isPresentingLogoutAlert: Bool = false
    
    var body: some View {
        NavigationView {
            Group {
                if store.currentState.isLoggedIn {
                    ZStack {
                        List {
                            Text("Hello")
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
                            router = .login
                        }
                        .tint(.blue)
                        
                        Button("Register") {
//                            showingLogin.toggle()
                        }
                        .tint(.blue)
//                        .sheet(isPresented: $showingLogin) {
//                            NavigationView {
//
//                            }
//                        }
                    }
                }
            }
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
        .tabItem {
            Text("Customer")
        }
    }
}