import SwiftUI
import Router
import core

struct AddressListView: View {
    @EnvironmentObject private var navigator: Navigator
    private let store: AddressListUIStore
    @UIState private var state: AddressListUIState
    
    init(store: AddressListUIStore = getStore()) {
        self.store = store
        state = store.currentState
    }
    
    var body: some View {
        List {
            Section(header: HStack {
                Button("New Address") {
                    navigator.navigate("create")
                }.tint(.blue)
            }, content: {
                ForEach(state.addresses) { address in
                    HStack {
                        Button {
                            navigator.navigate("edit/\(address.id)")
                        } label: {
                            Text("\(address.firstName) \(address.lastName)\n\(address.city), \(address.street), \(address.postcode)")
                                .font(.appRegular)
                        }
                        Spacer()
                        Image("next")
                    }
                }
            })
        }
        .pullToRefresh(isShowing: state.isRefreshing) {
            store.refreshAddresses()
        }
        .navigationBarTitle("Address List".uppercased())
        .listStyle(.insetGrouped)
        .bind(store, state: $state)
    }
}
