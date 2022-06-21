import SwiftUI
import UIKit

protocol Route {
    var presentationStyle: PresentationStyle { get }
    func controller() -> UIViewController
}

extension Route {
    var presentationStyle: PresentationStyle { .push }
}

protocol AnySwiftUIRoute: Route {
    func anyView(with router: Router) -> AnyView
}

protocol SwiftUIRoute: AnySwiftUIRoute {
    associatedtype Content: View
    var body: Content { get }
}

extension SwiftUIRoute {
    func anyView(with router: Router) -> AnyView {
        AnyView(body.environmentObject(router))
    }
    
    func controller() -> UIViewController {
        fatalError()
    }
}
