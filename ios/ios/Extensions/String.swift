import Foundation

extension String {
    func fromBase64() -> String? {
        Data(base64Encoded: self).flatMap { String(data: $0, encoding: .utf8) }
    }
    func toBase64() -> String {
        Data(self.utf8).base64EncodedString()
    }
    
}
