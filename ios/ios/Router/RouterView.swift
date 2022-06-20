import SwiftUI

struct RouterView<Content: View>: UIViewControllerRepresentable {
    @ViewBuilder var content: (Router) -> Content
    
    func makeUIViewController(context: Context) -> RouterViewController {
        RouterViewController()
    }
    
    func updateUIViewController(_ controller: RouterViewController, context: Context) {
        let router = Router(controller, route: RootRoute())
        controller.rootView = AnyView(content(router).environmentObject(router))
    }
}

struct RootRoute: Route {
    var body: some View {
        EmptyView()
    }
}
