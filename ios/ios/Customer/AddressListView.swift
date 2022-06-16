import SwiftUI
import core

struct AddressListScreen: View {
    var body: some View {
        AddressListView()
    }
}

struct AddressListView: View {
    
    @Store var store: AddressListUIStore
    @SwiftUI.State private var showCreateAddress = false
    @SwiftUI.State private var showEditAddress = false
    
    var body: some View {
        List {
            Section(header: HStack {
                NavigationLink(destination: CreateAddressScreen(showCreateAddress: $showCreateAddress), isActive: $showCreateAddress) {
                    Text("New Address").tint(.blue)
                }
            }, content: {
                ForEach(store.currentState.addresses) { address in
                    NavigationLink(destination: EditAddresScreen(address: address, showEditAddress: $showEditAddress), isActive: $showEditAddress) {
                        Text("\(address.firstName) \(address.lastName)\n\(address.city), \(address.street), \(address.postcode)")
                    }
                }
            })
        }
        .listStyle(.insetGrouped)
        .navigationTitle("Address List".uppercased())
    }
}
