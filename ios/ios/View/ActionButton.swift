import SwiftUI

func ActionButtons(qty: Int32, width: CGFloat = 40, inc: @escaping () -> Void, dec: @escaping () -> Void) -> some View {
    HStack {
        ActionButton(image: "minus", width: width, action: dec)
        Text("\(qty)")
        ActionButton(image: "plus", width: width, action: inc)
    }
}

func ActionButton(image: String, width: CGFloat, action: @escaping () -> Void) -> some View {
    Button(action: action) {
        Image(image)
            .frame(maxWidth: .infinity, maxHeight: .infinity)
    }
    .frame(width: width, height: 20)
    .background(Color.gallery)
    .cornerRadius(6)
}
