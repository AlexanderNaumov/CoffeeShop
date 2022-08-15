import SwiftUI
import core

@main
struct iOSApp: App {
    
    init() {
        CoreKt.coreInit()
        let store = CoreKt.app.koin.get(type: AppStore.self) as! AppStore
        store.load()
    }
    
	var body: some Scene {
		WindowGroup {
            TabView {
                NavView { _ in
                    CatalogView()
                }
                .ignoresSafeArea()
                .tabItem {
                    Image("shop").renderingMode(.template)
                    Text("Shop")
                }
                NavView { _ in
                    WishlistView()
                }
                .ignoresSafeArea()
                .tabItem {
                    Image("wishlist").renderingMode(.template)
                    Text("Wishlist")
                }
                NavView { _ in
                    CartView()
                }
                .ignoresSafeArea()
                .tabItem {
                    Image("basket").renderingMode(.template)
                    Text("Cart")
                }
                NavView { _ in
                    CustomerView()
                }
                .ignoresSafeArea()
                .tabItem {
                    Image("customer").renderingMode(.template)
                    Text("Customer")
                }
            }.accentColor(.black)
		}
	}
}
