import Foundation
import core

extension Price {
    public override var description: String {
        let formatter = NumberFormatter()
        formatter.numberStyle = .currency
        formatter.minimumFractionDigits = 2
        let currency = currency == "RUB" ? "₽" : currency
        formatter.currencySymbol = currency
        return formatter.string(from: value as NSNumber) ?? ""
    }
}
