import SwiftUI

struct RouterView<Content: View>: UIViewControllerRepresentable {
    @ViewBuilder var content: (Router) -> Content
    
    func makeUIViewController(context: Context) -> UIHostingController<AnyView> {
        UIHostingController(rootView: AnyView(EmptyView()))
    }
    
    func updateUIViewController(_ controller: UIHostingController<AnyView>, context: Context) {
        let router = Router(controller, route: RootRoute())
        controller.rootView = AnyView(content(router).environmentObject(router))
    }
}

struct NavView<Content: View>: UIViewControllerRepresentable {
    @ViewBuilder var content: (Router) -> Content
    
    func makeUIViewController(context: Context) -> UINavigationController {
        UINavigationController()
    }
    
    func updateUIViewController(_ controller: UINavigationController, context: Context) {
        let vc = UIHostingController(rootView: AnyView(EmptyView()))
        let router = Router(vc, route: RootRoute())
//        controller.navigationBar.prefersLargeTitles = true
        vc.rootView = AnyView(content(router).environmentObject(router))
        controller.viewControllers = [vc]
    }
}

private struct RootRoute: Route {
    func controller() -> UIViewController {
        fatalError()
    }
}
