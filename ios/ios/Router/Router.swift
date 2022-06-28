import UIKit
import SwiftUI

@MainActor
final class Router: ObservableObject {
    private weak var vc: UIViewController!
    private let route: Route
    private var childs = NSHashTable<Router>.weakObjects()
    private weak var parent: Router?
    init(_ vc: UIViewController, route: Route) {
        self.vc = vc
        self.route = route
        
    }
    
    @discardableResult
    func open<R: Route>(_ route: R, animated: Bool = true) async -> Router {
        let vc: UIViewController
        let router: Router
        switch route {
        case let route as AnySwiftUIRoute:
            let _vc = UIHostingController(rootView: AnyView(EmptyView()))
            router = Router(_vc, route: route)
            _vc.rootView = route.anyView(with: router)
            _vc.title = route.title
            vc = _vc
        default:
            vc = route.controller()
            router = Router(vc, route: route)
        }
        vc.router = router
        childs.add(router)
        router.parent = self
        await route.presentationStyle.presenter.present(from: self.vc, to: vc, animated: animated)
        return router
    }
    
    func open<R: Route>(_ route: R, animated: Bool = true) {
        Task {
            await open(route, animated: animated)
        }
    }
    
    func close(animated: Bool = true) async {
        guard let vc = vc else { return }
        await route.presentationStyle.presenter.dismiss(vc: vc, animated: animated)
    }
    
    func close(animated: Bool = true) {
        Task {
            await close(animated: animated)
        }
    }
    
//    deinit {
//        print("----- deinit \(route)")
//    }
}
