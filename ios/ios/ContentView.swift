import SwiftUI
import core

struct ContentView: View {
    
    @Store var store: CatalogStore
    
    let columns = Array(repeating: GridItem(.flexible()), count: 2)
    
    var body: some View {
        TabView {
            NavigationView {
                ScrollView {
                    VStack {
                        LazyVGrid(columns: columns) {
                            ForEach(store.currentState.categories) { category in
                                ForEach(category.products) { product in
                                    VStack {
                                        VStack {
                                            AsyncImage(url: URL(string: product.thumbnail)) { image in
                                                image
                                                    .resizable()
                                                    .scaledToFit()
                                            } placeholder: {
                                                ProgressView()
                                            }
                                        }
                                        .padding()
                                        .frame(maxWidth: .greatestFiniteMagnitude, maxHeight: .greatestFiniteMagnitude)
                                        .aspectRatio(1, contentMode: .fill)
                                        .background(Color(0xF0F0F0))
                                        .cornerRadius(20)
                                        Text(product.name)
                                            .font(.system(size: 15, weight: .semibold))
                                        HStack {
                                            Text("\(product.price)")
                                                .font(.system(size: 15, weight: .semibold))
                                            Button {
                                                
                                            } label: {
                                                Text("+")
                                                    .foregroundColor(.black)
                                                    .font(.system(size: 20, weight: .semibold))
                                            }
                                            .frame(width: 40, height: 20)
                                            .background(Color(0xF0F0F0))
                                            .cornerRadius(6)
                                        }
                                    }
                                    .padding(8)
                                    .background(.white)
                                    .cornerRadius(20)
                                }.padding(10)
                            }
                        }
                    }.padding(10)
                }.onAppear {
                    store.loadCatalog()
                }
                .navigationTitle("Coffe".uppercased())
                .background(Color(0xF0F2F5))
            }
            .tabItem {
                //                Image(systemName: "phone.fill")
                Text("Shop")
            }
        }.accentColor(.black)
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        Group {
            ContentView()
                .previewDevice("iPhone SE (2nd generation)")
        }
    }
}
