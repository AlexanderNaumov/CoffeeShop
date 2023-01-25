import SwiftUI

func ProductLoader() -> some View {
    VStack {
        ProgressView().tint(.black)
    }
    .frame(width: 50, height: 50)
    .background(
        .ultraThickMaterial,
        in: RoundedRectangle(cornerRadius: 8, style: .continuous)
    )
}

