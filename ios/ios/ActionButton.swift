import SwiftUI

func ActionButtons(qty: Int32, width: CGFloat = 40, inc: @escaping () -> Void, dec: @escaping () -> Void) -> some View {
    HStack {
        ActionButton(text: "-", width: width) {
            dec()
        }
        Text("\(qty)")
        ActionButton(text: "+", width: width) {
            inc()
        }
    }
}

func ActionButton(text: String, width: CGFloat, action: @escaping () -> Void) -> some View {
    Button {
        action()
    } label: {
        Text(text)
            .foregroundColor(.black)
            .font(.system(size: 20, weight: .semibold))
    }
    .frame(width: width, height: 20)
    .background(Color(0xF0F0F0))
    .cornerRadius(6)
}
