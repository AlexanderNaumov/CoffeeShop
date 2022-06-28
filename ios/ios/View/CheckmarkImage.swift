import SwiftUI

func CheckmarkImage(_ filled: Bool) -> some View {
    Image(systemName: filled ? "checkmark.square.fill" : "square")
}
