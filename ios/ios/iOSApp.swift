import SwiftUI
import core

@main
struct iOSApp: App {
    
    @SwiftUI.State var router: Routing? = nil
    
    init() {
        CoreKt.coreInit()
    }
    
	var body: some Scene {
		WindowGroup {
            TabView {
                Group {
                    CatalogView()
                    CartView()
                    CustomerView(router: $router)
                }.sheet(item: $router) { routing in
                    switch routing {
                    case .login:
                        LoginView(router: $router)
                    case .signup:
                        SignupView(router: $router)
                    }
                }
            }.accentColor(.black)
		}
	}
}

enum Routing: Identifiable {
    var id: String { "\(type(of: self))" }
    
    case login
    case signup
}
