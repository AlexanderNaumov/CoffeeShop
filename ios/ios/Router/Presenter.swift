import UIKit

protocol Presenter {
    func present(from: UIViewController, to: UIViewController, animated: Bool, completion: @escaping () -> Void)
    func dismiss(vc: UIViewController, animated: Bool, completion: @escaping () -> Void)
}

struct PushPresenter: Presenter {
    func present(from: UIViewController, to: UIViewController, animated: Bool, completion: @escaping () -> Void) {
        guard let nav = from.navigationController else {
            completion()
            return
        }
        nav.pushViewController(to, animated: animated)
        if animated, let coordinator = nav.transitionCoordinator {
            coordinator.animate(alongsideTransition: nil) { _ in completion() }
        } else {
            completion()
        }
      
        
        
    }
    func dismiss(vc: UIViewController, animated: Bool, completion: @escaping () -> Void) {
        guard let nav = vc.navigationController else {
            completion()
            return
        }
        nav.popViewController(animated: animated)
        if animated, let coordinator = nav.transitionCoordinator {
            coordinator.animate(alongsideTransition: nil) { _ in completion() }
        } else {
            completion()
        }
    }
}

struct SheetPresenter: Presenter {
    func present(from: UIViewController, to: UIViewController, animated: Bool, completion: @escaping () -> Void) {
        from.present(to, animated: animated, completion: completion)
    }
    func dismiss(vc: UIViewController, animated: Bool, completion: @escaping () -> Void) {
        vc.dismiss(animated: animated, completion: completion)
    }
}

struct FullscreenPresenter: Presenter {
    func present(from: UIViewController, to: UIViewController, animated: Bool, completion: @escaping () -> Void) {
        to.modalPresentationStyle = .fullScreen
        from.present(to, animated: animated, completion: completion)
    }
    func dismiss(vc: UIViewController, animated: Bool, completion: @escaping () -> Void) {
        vc.dismiss(animated: animated, completion: completion)
    }
}
