import SwiftUI
import core

struct CatalogView: View {
    
    @Store var store: CatalogUIStore

    init() {
        store.loadCatalog()
    }
    
    let columns = Array(repeating: GridItem(.flexible()), count: 2)
    
    var body: some View {
        return NavigationView {
            ScrollView {
                VStack {
                    LazyVGrid(columns: columns) {
                        ForEach(store.currentState.categories) { category in
                            ForEach(category.products) { product in
                                ProductItem(product: product) {
                                    store.incrementProduct(product: product)
                                } dec: {
                                    store.decrementProduct(product: product)
                                }
                            }.padding(10)
                        }
                    }
                }.padding(10)
            }
            .navigationTitle("Coffe".uppercased())
            .background(Color(0xF0F2F5))
        }
        .tabItem {
            //                Image(systemName: "phone.fill")
            Text("Shop")
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        CatalogView()
        //            .previewLayout(PreviewLayout.sizeThatFits)
    }
}

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
                    ActionButton(text: "+") {
                        inc()
                    }
                } else {
                    ActionButtons(qty: product.qty) {
                        inc()
                    } dec: {
                        dec()
                    }
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

struct ProductImage: View {
    let image: String
    var body: some View {
        VStack {
            AsyncImage(url: URL(string: image)) { image in
                image
                    .resizable()
                    .scaledToFit()
            } placeholder: {
                ProgressView()
            }
        }
    }
}

func ActionButtons(qty: Int32, inc: @escaping () -> Void, dec: @escaping () -> Void) -> some View {
    HStack {
        ActionButton(text: "-") {
            dec()
        }
        Text("\(qty)")
        ActionButton(text: "+") {
            inc()
        }
    }
}

func ActionButton(text: String, action: @escaping () -> Void) -> some View {
    Button {
        action()
    } label: {
        Text(text)
            .foregroundColor(.black)
            .font(.system(size: 20, weight: .semibold))
    }
    .frame(width: 40, height: 20)
    .background(Color(0xF0F0F0))
    .cornerRadius(6)
}
