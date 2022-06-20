import SwiftUI

final class RouterViewController: UIHostingController<AnyView> {
    init() {
        super.init(rootView: AnyView(EmptyView()))
    }
    
    required init?(coder aDecoder: NSCoder) { nil }
}
