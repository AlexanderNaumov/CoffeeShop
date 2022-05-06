import Foundation
import core

extension Price {
    public override var description: String {
        let formatter = NumberFormatter()
        formatter.numberStyle = .currency
        formatter.minimumFractionDigits = 2
        formatter.currencySymbol = currency
        formatter.locale = Locale(identifier: "en")
        return formatter.string(from: value as NSNumber) ?? ""
    }
}
