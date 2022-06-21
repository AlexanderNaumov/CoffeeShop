import UIKit

extension UIViewController {
    private struct AssociatedKey { static var router: UInt8 = 0 }
    
    var router: Router! {
        get { return objc_getAssociatedObject(self, &AssociatedKey.router) as? Router }
        set { objc_setAssociatedObject(self, &AssociatedKey.router, newValue, .OBJC_ASSOCIATION_RETAIN_NONATOMIC) }
    }
}
