import SwiftUI

//struct AsyncImage: UIViewRepresentable {
//    let url: URL?
//    
//    func makeUIView(context: Context) -> UIImageView {
//        UIImageView()
//    }
//    
//    func updateUIView(_ imageView: UIImageView, context: Context) {
//        imageView.image(url: url)
//    }
//}
//
//private let cache = URLCache(memoryCapacity: 10_000_000, diskCapacity: 1_000_000_000, diskPath: "/image-cache")
//
//private extension UIImageView {
//    
//    private struct AssociatedKeys {
//        static var task: UInt8 = 0
//    }
//
//    private var task: URLSessionDataTask? {
//        get { return objc_getAssociatedObject(self, &AssociatedKeys.task) as? URLSessionDataTask }
//        set { objc_setAssociatedObject(self, &AssociatedKeys.task, newValue, .OBJC_ASSOCIATION_RETAIN_NONATOMIC) }
//    }
//    
//    func image(url: URL?) {
//        image = nil
//        task?.cancel()
//        task = nil
//        
//        guard let url = url else { return }
//        
//        let setImage = { [weak self] (data: Data, animated: Bool) in
//            guard let self = self else { return }
//            let image = UIImage(data: data)
//            DispatchQueue.main.async {
//                if animated {
//                    UIView.transition(with: self, duration: 0.2, options: .transitionCrossDissolve, animations: {
//                        self.image = image
//                    })
//                } else {
//                    self.image = image
//                }
//            }
//        }
//        
//        let request = URLRequest(url: url)
//        
//        DispatchQueue.global(qos: .userInitiated).async {
//            if let response = cache.cachedResponse(for: request) {
//                setImage(response.data, false)
//            } else {
//                let task =  URLSession.shared.dataTask(with: request) { data, response, _ in
//                    self.task = nil
//                    guard let data = data, let response = response else { return }
//                    cache.storeCachedResponse(CachedURLResponse(response: response, data: data), for: request)
//                    setImage(data, true)
//                }
//                task.resume()
//                self.task = task
//            }
//        }
//    }
//}
