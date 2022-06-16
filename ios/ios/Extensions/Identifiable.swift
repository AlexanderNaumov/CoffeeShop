import SwiftUI
import core

extension core.Category: Identifiable {}
extension core.Product: Identifiable {}
extension core.Cart.Item: Identifiable {}
extension core.Address: Identifiable {}
extension core.Field: Identifiable {
    public var id: String {
        type.description()
    }
}
