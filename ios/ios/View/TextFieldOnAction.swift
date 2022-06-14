import SwiftUI
import Combine

private final class TextFieldState: ObservableObject {
    @Published var value: String
    private var cancellable: AnyCancellable?
    
    init(value: String, onChange: @escaping (String) -> Void) {
        self.value = value
        cancellable = $value.dropFirst().removeDuplicates().sink(receiveValue: onChange)
    }
    
    deinit {
        cancellable?.cancel()
    }
}

enum TextFieldType {
    case `default`, secure
}

struct TextFieldOnAction: View {
    private let placeholder: String
    private let type: TextFieldType
    
    @ObservedObject private var state: TextFieldState
    
    init(type: TextFieldType = .default, placeholder: String, value: String, onChange: @escaping (String) -> Void) {
        self.type = type
        self.placeholder = placeholder
        state = TextFieldState(value: value, onChange: onChange)
    }
    
    var body: some View {
        switch type {
        case .default:
            TextField(placeholder, text: $state.value)
        case .secure:
            SecureField(placeholder, text: $state.value)
        }
    }
}

