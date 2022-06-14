import SwiftUI
import core

func AccountTextField(field: Field, onChange: @escaping (String) -> Void) -> some View {
    let isPassword = field.type == FieldType.password
    let isEmail = field.type == FieldType.email
    return VStack {
        TextFieldOnAction(
            type: isPassword ? .secure : .default,
            placeholder: field.type.description(),
            value: field.value,
            onChange: onChange
        )
        .keyboardType(isEmail ? .emailAddress : .default)
        .autocapitalization(isEmail ? .none : .words)
        .textFieldStyle(RoundedBorderTextFieldStyle())
        if let error = field.error {
            Text(error)
                .font(.custom("Helvetica Neue", size: 12))
                .foregroundColor(.red)
                .frame(maxWidth: .infinity, alignment: .leading)
        }
    }
    .padding(EdgeInsets(top: 0, leading: 15, bottom: 0, trailing: 15))
}
