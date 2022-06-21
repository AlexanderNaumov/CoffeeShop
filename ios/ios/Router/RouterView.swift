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

private struct RootRoute: Route {
    func controller() -> UIViewController {
        fatalError()
    }
}
