import SwiftUI

func ErrorAlert(_ message: String) -> Alert {
    Alert(title: Text("Error"), message: Text(message))
}
