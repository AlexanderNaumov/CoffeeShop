import SwiftUI

protocol AnyRoute {
    var presentationStyle: PresentationStyle { get }
}

protocol Route: AnyRoute {
    associatedtype Content: View
    var body: Content { get }
}

extension Route {
    var presentationStyle: PresentationStyle { .push }
}
