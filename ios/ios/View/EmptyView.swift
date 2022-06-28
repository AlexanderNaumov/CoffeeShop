import SwiftUI

func EmptyView(text: String) -> some View {
    VStack {
        Text(text)
    }
    .frame(maxWidth: .infinity, maxHeight: .infinity)
    .background(Color.porcelain)
}
