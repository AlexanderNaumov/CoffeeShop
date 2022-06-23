import SwiftUI
import core

extension core.Category: Identifiable {}
extension core.Product: Identifiable {}
extension core.Cart.Item: Identifiable {}
extension core.Address: Identifiable {}
extension core.PaymentMethod: Identifiable {}
extension core.ShippingMethod: Identifiable {}
extension core.Field: Identifiable {
    public var id: String {
        type.description()
    }
}
