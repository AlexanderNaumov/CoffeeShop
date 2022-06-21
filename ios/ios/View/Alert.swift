import UIKit

struct Alert {
    let title: String
    let message: String?
    let buttons: [Button]?

    init(title: String, message: String? = nil, dismissButton: Button? = nil) {
        self.title = title
        self.message = message
        buttons = [dismissButton ?? .cancel("OK")]
    }

    init(title: String, message: String? = nil, primaryButton: Button, secondaryButton: Button) {
        self.title = title
        self.message = message
        buttons = [primaryButton, secondaryButton]
    }

    struct Button {
        let label: String
        let style: UIAlertAction.Style
        let action: (() -> Void)?
        static func `default`(_ label: String, action: (() -> Void)? = nil) -> Button {
            Button(label: label, style: .default, action: action)
        }
        static func cancel(_ label: String, action: (() -> Void)? = nil) -> Button {
            Button(label: label, style: .cancel, action: action)
        }
        static func cancel(_ action: (() -> Void)? = nil) -> Button {
            Button(label: "Cancel", style: .cancel, action: action)
        }
        static func destructive(_ label: String, action: (() -> Void)? = nil) -> Button {
            Button(label: label, style: .destructive, action: action)
        }
    }
}

struct AlertRoute: Route {
    var presentationStyle: PresentationStyle { .sheet }
    let alert: Alert
    func controller() -> UIViewController {
        let alert = UIAlertController(title: alert.title, message: alert.message, preferredStyle: .alert)
        self.alert.buttons?.forEach { btton in
            alert.addAction(UIAlertAction(title: btton.label, style: btton.style) { _ in
                btton.action?()
            })
        }
        return alert
    }
}
