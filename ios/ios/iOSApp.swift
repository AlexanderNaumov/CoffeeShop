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
                Group {
                    CatalogView()
                    CartView()
                    CustomerView()
                }
            }.accentColor(.black)
		}
	}
}
