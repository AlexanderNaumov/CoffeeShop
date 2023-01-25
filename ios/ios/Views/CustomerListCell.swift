import SwiftUI

func CustomerListCell(_ title: String, tap: @escaping () -> Void) -> some View {
    HStack {
        Button {
            tap()
        } label: {
            Text(title)
        }.tint(.black)
        Spacer()
        Image("next")
    }
}
