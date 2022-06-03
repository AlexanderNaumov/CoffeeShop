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
            }.pullToRefresh(isShowing: store.currentState.isRefreshing) {
                store.refreshCatalog()
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

struct LegacyScrollView : UIViewRepresentable {
    // any data state, if needed

    func makeCoordinator() -> Coordinator {
        Coordinator(self)
    }

    func makeUIView(context: Context) -> UIScrollView {
        let control = UIScrollView()
        control.refreshControl = UIRefreshControl()
        control.refreshControl?.addTarget(context.coordinator, action:
            #selector(Coordinator.handleRefreshControl),
                                          for: .valueChanged)

        // Simply to give some content to see in the app
        let label = UILabel(frame: CGRect(x: 0, y: 0, width: 200, height: 30))
        label.text = "Scroll View Content"
        control.addSubview(label)

        return control
    }


    func updateUIView(_ uiView: UIScrollView, context: Context) {
        // code to update scroll view from view state, if needed
    }

    class Coordinator: NSObject {
        var control: LegacyScrollView

        init(_ control: LegacyScrollView) {
            self.control = control
        }

        @objc func handleRefreshControl(sender: UIRefreshControl) {
            // handle the refresh event

            sender.endRefreshing()
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
                    ActionButton(text: "+", width: 60) {
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

func ActionButtons(qty: Int32, width: CGFloat = 40, inc: @escaping () -> Void, dec: @escaping () -> Void) -> some View {
    HStack {
        ActionButton(text: "-", width: width) {
            dec()
        }
        Text("\(qty)")
        ActionButton(text: "+", width: width) {
            inc()
        }
    }
}

func ActionButton(text: String, width: CGFloat, action: @escaping () -> Void) -> some View {
    Button {
        action()
    } label: {
        Text(text)
            .foregroundColor(.black)
            .font(.system(size: 20, weight: .semibold))
    }
    .frame(width: width, height: 20)
    .background(Color(0xF0F0F0))
    .cornerRadius(6)
}
