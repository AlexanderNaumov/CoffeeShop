import { Form } from "rsuite"
import core from "./coffee-shop-core/CoffeeShop-core"
import Field = core.me.haymob.coffeeshop.entities.Field
import FieldType = core.me.haymob.coffeeshop.entities.FieldType

export default function InputForm(field: Field, onChange: (value: string) => void) {
    let isPassword = field.type == FieldType.Password || field.type == FieldType.NewPassword
    return <Form.Group>
        <Form.ControlLabel>{field.type.name}</Form.ControlLabel>
        {
            isPassword ?
                <Form.Control name="password" type="password" autoComplete="off" onChange={(value: string) => onChange(value)} /> :
                <Form.Control name="name" onChange={(value: string) => {
                    console.log(value)
                    onChange(value)
                }} />
        }
        {
            field.error && <Form.HelpText style={{ color: "red" }}>{field.error}</Form.HelpText>
        }
    </Form.Group>
}