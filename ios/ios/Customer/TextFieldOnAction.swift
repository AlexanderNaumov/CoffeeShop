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

struct TextFieldOnAction: View {
    private let placeholder: String
    
    @ObservedObject private var state: TextFieldState
    
    init(placeholder: String, value: String, onChange: @escaping (String) -> Void) {
        self.placeholder = placeholder
        state = TextFieldState(value: value, onChange: onChange)
    }
    
    var body: some View {
        TextField(
            placeholder,
            text: $state.value
        )
    }
}

