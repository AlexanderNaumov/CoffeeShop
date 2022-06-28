import SwiftUI

func WidewButton(title: String, color: Color, action: @escaping () -> Void) -> some View {
    Button(action: action) {
        Text(title.uppercased())
            .frame(maxWidth: .infinity, maxHeight: .infinity)
    }
    .foregroundColor(.white)
    .frame(height: 40)
    .frame(maxWidth: .infinity)
    .background(color)
    .cornerRadius(12)
    .padding(EdgeInsets(top: 0, leading: 15, bottom: 15, trailing: 15))
    .background(Color.porcelain)
}
