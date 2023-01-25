import SwiftUI
import Router

func OrderSuccessAlert(_ navigator: Navigator, orderId: String) -> Alert {
    Alert(
        title: Text("Success"),
        message: Text("Order ID: \(orderId)"),
        dismissButton: .cancel(Text("Ok")) {
            navigator.back()
        }
    )
}
