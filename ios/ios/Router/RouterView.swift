import SwiftUI

struct RouterView<Content: View>: UIViewControllerRepresentable {
    @ViewBuilder var content: (Router) -> Content
    
    func makeUIViewController(context: Context) -> RouterViewController<RootRoute> {
        RouterViewController(route: RootRoute())
    }
    
    func updateUIViewController(_ controller: RouterViewController<RootRoute>, context: Context) {
        let router = Router(controller)
        controller.rootView = AnyView(content(router).environmentObject(router))
    }
}

struct RootRoute: Route {
    var body: some View {
        EmptyView()
    }
}
