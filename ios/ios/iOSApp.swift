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
                CatalogView()
                WishlistView()
                CartView()
                CustomerView()
            }.accentColor(.black)
		}
	}
}
