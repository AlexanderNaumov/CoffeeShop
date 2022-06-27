import SwiftUI

func FullScreenLoader() -> some View {
    VStack {
        VStack {
            Text("Loading...")
            ProgressView().tint(.black)
        }
        .frame(width: 200, height: 120)
        .background(
            .ultraThickMaterial,
            in: RoundedRectangle(cornerRadius: 8, style: .continuous)
        )
    }
    .frame(maxWidth: .infinity, maxHeight: .infinity)
    .background(Color(.displayP3, white: 0, opacity: 0.2))
}
