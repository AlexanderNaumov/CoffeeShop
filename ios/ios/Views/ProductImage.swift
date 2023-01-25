import SwiftUI

struct ProductImage: View {
    let image: String
    var body: some View {
        AsyncImage(url: URL(string: image)) {
            ProgressView()
        }.aspectRatio(contentMode: .fit)
    }
}
