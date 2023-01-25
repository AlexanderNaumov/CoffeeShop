import SwiftUI

func ProductDetailInfoBlock(title: String, content: String) -> some View {
    Group {
        HStack {
            Text(title)
                .font(.appRegular)
            Spacer()
            Text(content)
                .font(.appSemibold)
        }
        Divider()
    }
}
