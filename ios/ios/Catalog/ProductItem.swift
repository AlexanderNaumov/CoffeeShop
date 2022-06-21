import SwiftUI
import core

struct ProductItem: View {
    let product: Product, inc, dec: () -> Void
    var body: some View {
        ZStack {
            VStack {
                VStack {
                    ProductImage(image: product.thumbnail)
                }
                .padding()
                .frame(maxWidth: .greatestFiniteMagnitude, maxHeight: .greatestFiniteMagnitude)
                .aspectRatio(1, contentMode: .fill)
                .background(Color(0xF0F0F0))
                .cornerRadius(20)
                Text(product.name)
                    .font(.system(size: 15, weight: .semibold))
                Text("\(product.price)")
                    .font(.system(size: 15, weight: .semibold))
                if product.qty == 0 {
                    ActionButton(text: "+", width: 60, action: inc)
                } else {
                    ActionButtons(qty: product.qty, inc: inc, dec: dec)
                }
            }
            .padding(8)
            .background(.white)
            .cornerRadius(20)
            .opacity(product.isLoading ? 0.8 : 1)
            if product.isLoading {
                VStack {
                    ProgressView()
                        .tint(.black)
                }
            }
        }
    }
}

