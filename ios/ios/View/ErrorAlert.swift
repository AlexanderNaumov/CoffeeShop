import SwiftUI

final class ErrorState: ObservableObject {
    @Published var message: String?
    
    var isPresentingAlert: Binding<Bool> {
        Binding<Bool>(
            get: { self.message != nil },
            set: { newValue in
                guard !newValue else { return }
                self.message = nil
            }
        )
    }
}


extension View {
    func errorAlert(errorState: ErrorState) -> some View {
        alert(isPresented: errorState.isPresentingAlert, content: {
            Alert(title: Text("Error"), message: errorState.message.map(Text.init), dismissButton: nil)
        })
    }
}
