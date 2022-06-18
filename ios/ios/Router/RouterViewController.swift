import SwiftUI

protocol AnyRouterViewController {
    var anyRoute: AnyRoute { get }
}

final class RouterViewController<R: Route>: UIHostingController<AnyView>, AnyRouterViewController {
    
    let route: R
    
    var anyRoute: AnyRoute { route }
    
    init(route: R) {
        self.route = route
        super.init(rootView: AnyView(EmptyView()))
    }
    
    required init?(coder aDecoder: NSCoder) { nil }
}
