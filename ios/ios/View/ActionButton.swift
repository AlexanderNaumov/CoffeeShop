import SwiftUI

func ActionButtons(qty: Int32, width: CGFloat = 40, inc: @escaping () -> Void, dec: @escaping () -> Void) -> some View {
    HStack {
        ActionButton(image: "minus", width: width) {
            dec()
        }
        Text("\(qty)")
        ActionButton(image: "plus", width: width) {
            inc()
        }
    }
}

func ActionButton(image: String, width: CGFloat, action: @escaping () -> Void) -> some View {
    Button(action: action) {
        Image(image)
    }
    .frame(width: width, height: 20)
    .background(Color.gallery)
    .cornerRadius(6)
}

// .font(.system(size: 20, weight: .semibold))
