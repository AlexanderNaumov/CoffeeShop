import UIKit

protocol Presenter {
    func present(from: UIViewController, to: UIViewController, animated: Bool) async
    func dismiss(vc: UIViewController, animated: Bool) async
}

@MainActor
struct PushPresenter: Presenter {
    func present(from: UIViewController, to: UIViewController, animated: Bool) async {
        guard let nav = from.navigationController else { return }
        nav.pushViewController(to, animated: animated)
        if animated, let coordinator = nav.transitionCoordinator {
            await withCheckedContinuation { (continuation: CheckedContinuation<Void, Never>) in
                coordinator.animate(alongsideTransition: nil) { _ in continuation.resume() }
            }
        }
    }
    func dismiss(vc: UIViewController, animated: Bool) async {
        guard let nav = vc.navigationController else { return }
        nav.popViewController(animated: animated)
        if animated, let coordinator = nav.transitionCoordinator {
            await withCheckedContinuation { (continuation: CheckedContinuation<Void, Never>) in
                coordinator.animate(alongsideTransition: nil) { _ in continuation.resume() }
            }
        }
    }
}

@MainActor
struct SheetPresenter: Presenter {
    func present(from: UIViewController, to: UIViewController, animated: Bool) async {
        await withCheckedContinuation { (continuation: CheckedContinuation<Void, Never>) in
            from.present(to, animated: animated, completion: continuation.resume)
        }
    }
    func dismiss(vc: UIViewController, animated: Bool) async {
        await withCheckedContinuation { (continuation: CheckedContinuation<Void, Never>) in
            vc.dismiss(animated: animated, completion: continuation.resume)
        }
    }
}

@MainActor
struct FullscreenPresenter: Presenter {
    func present(from: UIViewController, to: UIViewController, animated: Bool) async {
        await withCheckedContinuation { (continuation: CheckedContinuation<Void, Never>) in
            from.present(to, animated: animated, completion: continuation.resume)
        }
    }
    func dismiss(vc: UIViewController, animated: Bool) async {
        await withCheckedContinuation { (continuation: CheckedContinuation<Void, Never>) in
            vc.dismiss(animated: animated, completion: continuation.resume)
        }
    }
}
