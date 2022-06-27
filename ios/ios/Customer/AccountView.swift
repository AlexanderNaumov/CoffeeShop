import SwiftUI
import core

struct AccountRoute: SwiftUIRoute {
    var body: some View {
        AccountView()
    }
    var title: String? {
        "Account".uppercased()
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
        ZStack {
            ScrollView {
                Spacer(minLength: 100)
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
            }
            .pullToRefresh(isShowing: store.currentState.isRefreshing) {
                store.refreshCustomer()
            }
            .tint(.blue)
            .onAppear {
                setEffect()
            }
            if store.currentState.isLoading && !store.currentState.isRefreshing {
                FullScreenLoader()
            }
        }
    }
}
