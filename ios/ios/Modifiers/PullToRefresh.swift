import SwiftUI
import Introspect

private struct PullToRefresh<Target: UIView>: ViewModifier {
    var isShowing: Bool
    let onRefresh: () -> Void
    
    func body(content: Content) -> some View {
        switch Target.self {
        case is UITableView.Type:
            return AnyView(content.introspectTableView(customize: customize))
        case is UIScrollView.Type:
            return AnyView(content.introspectScrollView(customize: customize))
        default:
            fatalError()
        }
    }
    
    private func customize(scrollView: UIScrollView) {
        let refreshControl: RefreshControl
        if scrollView.refreshControl == nil {
            refreshControl = RefreshControl()
            scrollView.refreshControl = refreshControl
        } else {
            refreshControl = scrollView.refreshControl as! RefreshControl
        }
        refreshControl.onRefresh = onRefresh
        refreshControl.isRefreshing = isShowing
    }
}

extension ScrollView {
    @ViewBuilder func pullToRefresh(isShowing: Bool, onRefresh: @escaping () -> Void) -> some View {
        modifier(PullToRefresh<UIScrollView>(isShowing: isShowing, onRefresh: onRefresh))
    }
}
extension List {
    @ViewBuilder func pullToRefresh(isShowing: Bool, onRefresh: @escaping () -> Void) -> some View {
        modifier(PullToRefresh<UITableView>(isShowing: isShowing, onRefresh: onRefresh))
    }
}

fileprivate final class RefreshControl: UIRefreshControl {
    
    var onRefresh: (() -> Void)?
    
    override var isRefreshing: Bool {
        get { super.isRefreshing }
        set {
            if newValue {
                beginRefreshing()
            } else {
                endRefreshing()
            }
        }
    }
    
    override init() {
        super.init(frame: .zero)
        addTarget(self, action: #selector(onValueChanged), for: .valueChanged)
    }
    
    required init?(coder: NSCoder) { nil }
    
    @objc func onValueChanged() {
        onRefresh?()
    }
}
