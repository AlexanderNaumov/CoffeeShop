import SwiftUI
import core

struct CustomerView: View {
    
    @Store var store: CustomerUIStore
    @Binding var router: Routing?

    
    var body: some View {
        NavigationView {
            Group {
                if store.currentState.isLoggedIn {
                    List {
                        Text("Hello")
                    }
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
            }.navigationTitle("Customer".uppercased())
        }
        .tabItem {
            Text("Customer")
        }
    }
}
