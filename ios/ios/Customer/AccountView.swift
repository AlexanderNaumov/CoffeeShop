import SwiftUI
import Router
import core

struct AccountView: View {
    @EnvironmentObject private var navigator: Navigator
    private let store: AccountUIStore
    @UIState private var state: AccountUIState
    
    init(store: AccountUIStore = getStore()) {
        self.store = store
        state = store.currentState
    }
    
    var body: some View {
        ZStack {
            ScrollView {
                Spacer(minLength: 100)
                VStack(spacing: 18) {
                    ForEach(state.fields) { field in
                        InputTextField(field: field) { value in
                            store.updateField(type: field.type, value: value)
                        }
                    }
                    Button("Update") {
                        store.updateCustomer()
                    }
                }
            }
            .pullToRefresh(isShowing: state.isRefreshing) {
                store.refreshCustomer()
            }
            .background(Color.porcelain)
            .tint(.blue)
            if state.isLoading && !state.isRefreshing {
                FullScreenLoader()
            }
        }
        .navigationTitle("Account".uppercased())
        .bind(store, state: $state)
        .onEffect(store) { effect in
            switch effect {
            case let error as AccountUIEffect.Error:
                navigator.navigate("/customer/error/\(error.message.toBase64())")
            case is AccountUIEffect.Successes:
                navigator.back()
            default:
                break
            }
        }
    }
}
