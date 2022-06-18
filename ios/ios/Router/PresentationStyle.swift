enum PresentationStyle {
    case push
    case sheet
    case fullscreen
    case custome(Presenter)
}

extension PresentationStyle {
    var presenter: Presenter {
        switch self {
        case .push:
            return PushPresenter()
        case .sheet:
            return SheetPresenter()
        case .fullscreen:
            return FullscreenPresenter()
        case let .custome(presenter):
            return presenter
        }
    }
}
