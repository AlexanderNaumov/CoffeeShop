import SwiftUI

func CheckoutCell(title: String, checkmarkFilled: Bool, action: @escaping () -> Void) -> some View {
    Button(action: action) {
        HStack {
            CheckmarkImage(checkmarkFilled)
            Text(title)
                .font(.appRegular)
        }
    }.buttonStyle(PlainButtonStyle())
}
