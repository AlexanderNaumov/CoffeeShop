import UIKit
import SwiftUI

final class Router: ObservableObject {
    private let vc: UIViewController
//    @Published var isPresented = false
    init(_ vc: UIViewController) { self.vc = vc }
    
    func open<R: Route>(_ route: R) {
        let vc = RouterViewController(route: route)
        vc.rootView = AnyView(route.body.environmentObject(Router(vc)))
        route.presentationStyle.presenter.present(from: self.vc, to: vc)
//        isPresented = true
    }
    
    func close() {
        (vc as? AnyRouterViewController)?.anyRoute.presentationStyle.presenter.dismiss(vc: vc)
//        isPresented = false
    }
    
    func showAlert(_ alert: Alert) {
        
    }
}
