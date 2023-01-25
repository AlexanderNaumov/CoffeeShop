import SwiftUI

func OrderDetailSection(title: String, content: String) -> some View {
    Section(
        header: Text(title),
        content: {
            Text(content)
                .font(.appRegular)
        }
    )
}
