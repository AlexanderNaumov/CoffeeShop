import SwiftUI
import Combine

struct AsyncImage<Placeholder: View>: View {
    private let placeholder: () -> Placeholder
    
    @ObservedObject private var loader: ImageLoader
    
    init(url: URL?, @ViewBuilder placeholder: @escaping () -> Placeholder) {
        self.placeholder = placeholder
        _loader = ObservedObject(wrappedValue: ImageLoader(url: url))
    }
    
    var body: some View {
        ZStack {
            if let image = loader.image {
                Image(uiImage: image).resizable()
            }
            if loader.isLoading {
                placeholder()
            }
        }.onAppear(perform: loader.load)
    }
}

private final class ImageLoader: ObservableObject {
    
    private static let cache = URLCache(memoryCapacity: 10_000_000, diskCapacity: 1_000_000_000, diskPath: "/image-cache")
    
    @Published var image: UIImage?
    @Published var isLoading: Bool = false
    private let url: URL?
    private var cancellable: AnyCancellable?

    init(url: URL?) {
        self.url = url
    }
    
    func load() {
        image = nil
        cancellable?.cancel()
        
        guard let url = url else { return }
        let request = URLRequest(url: url)
        
        if let response = ImageLoader.cache.cachedResponse(for: request) {
            image = UIImage(data: response.data)
        } else {
            isLoading = true
            cancellable = URLSession.shared.dataTaskPublisher(for: request)
                .handleEvents(receiveOutput: { data, response in
                    ImageLoader.cache.storeCachedResponse(CachedURLResponse(response: response, data: data), for: request)
                })
                .map { UIImage(data: $0.data) }
                .replaceError(with: nil)
                .receive(on: DispatchQueue.main)
                .sink { [weak self] in
                    self?.image = $0
                    self?.isLoading = false
                }
        }
    }
    
    deinit {
        cancellable?.cancel()
    }
}
