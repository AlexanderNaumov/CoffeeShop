import UIKit
import SwiftUI

final class Router: ObservableObject {
    private weak var vc: UIViewController!
    private let route: AnyRoute
//    private var childs: [Router] = []
//    private weak var parent: Router?
    init(_ vc: UIViewController, route: AnyRoute) {
        self.vc = vc
        self.route = route
    }
    
    @discardableResult
    func open<R: Route>(_ route: R, animated: Bool = true) -> Router {
        let vc = RouterViewController()
        let router = Router(vc, route: route)
//        childs.append(router)
//        router.parent = self
        vc.rootView = AnyView(route.body.environmentObject(router))
        
        route.presentationStyle.presenter.present(from: self.vc, to: vc, animated: animated) {
            print("open")
        }
        return router
    }
    
    func close(animated: Bool = true) {
//        if let index = parent?.childs.firstIndex(where: { $0 === self }) {
//            parent!.childs.remove(at: index)
//        }
        route.presentationStyle.presenter.dismiss(vc: vc, animated: animated) {
            print("close")
        }
    }
    
    deinit {
        print("----- \(self)")
    }
}
