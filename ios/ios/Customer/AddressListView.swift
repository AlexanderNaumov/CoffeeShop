import SwiftUI
import core

struct AddressListRoute: SwiftUIRoute {
    var body: some View {
        AddressListView()
    }
    var title: String? {
        "Address List".uppercased()
    }
}

private struct AddressListView: View {
    @Store private var store: AddressListUIStore
    @EnvironmentObject private var router: Router
    
    var body: some View {
        List {
            Section(header: HStack {
                Button("New Address") {
                    router.open(CreateAddressRoute())
                }.tint(.blue)
            }, content: {
                ForEach(store.currentState.addresses) { address in
                    HStack {
                        Button("\(address.firstName) \(address.lastName)\n\(address.city), \(address.street), \(address.postcode)") {
                            router.open(EditAddresRoute(address: address))
                        }
                        Spacer()
                        Image("next")
                    }
                }
            })
        }
        .pullToRefresh(isShowing: store.currentState.isRefreshing) {
            store.refreshAddresses()
        }
        .listStyle(.insetGrouped)
    }
}
