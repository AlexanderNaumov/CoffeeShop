import SwiftUI

func LogoutAlert(action: @escaping () -> Void) -> Alert {
    Alert(
        title: Text("Logout"),
        message: Text("Do you want to leave?"),
        primaryButton: .cancel(),
        secondaryButton: .default(Text("Logout"), action: action)
    )
}
