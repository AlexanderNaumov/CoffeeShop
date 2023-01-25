import SwiftUI
import core

func CatalogProductItem(product: Product, inc: @escaping () -> Void, dec:  @escaping () -> Void) -> some View {
    ZStack {
        VStack {
            VStack {
                ProductImage(image: product.thumbnail)
            }
            .padding()
            .frame(maxWidth: .greatestFiniteMagnitude, maxHeight: .greatestFiniteMagnitude)
            .aspectRatio(1, contentMode: .fill)
            .background(Color.gallery)
            .cornerRadius(20)
            Text(product.name)
                .font(.appRegular)
            Text("\(product.price)")
                .font(.appSemibold)
            if product.qty == 0 {
                ActionButton(image: "plus", width: 60, action: inc)
            } else {
                ActionButtons(qty: product.qty, inc: inc, dec: dec)
            }
        }
        .padding(6)
        .background(.white)
        .cornerRadius(20)
        if product.isLoading {
            ProductLoader()
        }
    }
}
