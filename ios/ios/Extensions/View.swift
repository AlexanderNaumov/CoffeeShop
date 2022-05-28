import SwiftUI

struct Container<Content: View>: UIViewControllerRepresentable {
    
    let content: () -> Content
    
    func makeUIViewController(context: Context) -> ContainerController<Content> {
        ContainerController(rootView: content())
    }
    func updateUIViewController(_ uiViewController: ContainerController<Content>, context: Context) {
        uiViewController.rootView = content()
    }
}

class ContainerController<Content: View>: UIHostingController<Content> {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        DispatchQueue.main.async {
            print("----- \(self.view.subviews)")
        }
    }
}
