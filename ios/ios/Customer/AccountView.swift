import SwiftUI
import core

struct AccountRoute: SwiftUIRoute {
    var body: some View {
        AccountView()
    }
}

struct AccountView: View {
    @Store var store: AccountUIStore
    @EnvironmentObject var router: Router
    
    func setEffect() {
        store.onEffect { [weak router] effect in
            switch effect {
            case let error as AccountUIEffect.Error:
                router?.open(AlertRoute(alert: Alert(title: "Error", message: error.message)))
            case is AccountUIEffect.Successes:
                router?.close()
            default:
                break
            }
        }
    }
    
    var body: some View {
        ScrollView {
            Spacer(minLength: 100)
            ZStack {
                VStack(spacing: 18) {
                    ForEach(store.currentState.fields) { field in
                        AccountTextField(field: field) { value in
                            store.updateField(type: field.type, value: value)
                        }
                    }
                    Button("Update") {
                        store.updateCustomer()
                    }
                }
                .navigationTitle("Account".uppercased())
                if store.currentState.isLoading && !store.currentState.isRefreshing {
                    VStack {
                        ProgressView()
                            .tint(.black)
                    }
                }
            }
            .tint(.blue)
            .onAppear {
                setEffect()
            }
        }.pullToRefresh(isShowing: store.currentState.isRefreshing) {
            store.refreshCustomer()
        }
    }
}
