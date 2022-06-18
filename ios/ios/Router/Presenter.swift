import UIKit

protocol Presenter {
    func present(from: UIViewController, to: UIViewController)
    func dismiss(vc: UIViewController)
}

struct PushPresenter: Presenter {
    func present(from: UIViewController, to: UIViewController) {
        from.navigationController?.pushViewController(to, animated: true)
    }
    func dismiss(vc: UIViewController) {
        vc.navigationController?.popViewController(animated: true)
    }
}

struct SheetPresenter: Presenter {
    func present(from: UIViewController, to: UIViewController) {
        from.present(to, animated: true)
    }
    func dismiss(vc: UIViewController) {
        vc.dismiss(animated: true)
    }
}

struct FullscreenPresenter: Presenter {
    func present(from: UIViewController, to: UIViewController) {
        to.modalPresentationStyle = .fullScreen
        from.present(to, animated: true)
    }
    func dismiss(vc: UIViewController) {
        vc.dismiss(animated: true)
    }
}
