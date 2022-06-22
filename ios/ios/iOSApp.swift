import SwiftUI
import core

@main
struct iOSApp: App {
    
    init() {
        CoreKt.coreInit()
    }
    
	var body: some Scene {
		WindowGroup {
            TabView {
                NavView { _ in
                    CatalogView()
                }
                .ignoresSafeArea()
                .tabItem {
                    //                Image(systemName: "phone.fill")
                    Text("Shop")
                }
                NavView { _ in
                    WishlistView()
                }
                .ignoresSafeArea()
                .tabItem {
                    Text("Wishlist")
                }
                NavView { _ in
                    CartView()
                }
                .ignoresSafeArea()
                .tabItem {
                    Text("Cart")
                }
                NavView { _ in
                    CustomerView()
                }
                .ignoresSafeArea()
                .tabItem {
                    Text("Customer")
                }
            }.accentColor(.black)
		}
	}
}
