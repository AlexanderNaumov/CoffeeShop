import { Form } from "rsuite"
import core from "../shop-core/Shop-core"
import Field = core.me.haymob.shop.entities.Field
import FieldType = core.me.haymob.shop.entities.FieldType

interface InputFormProps {
    field: Field
    onChange: (value: string) => void
}

export default function InputForm({ field, onChange }: InputFormProps) {
    const isPassword = field.type == FieldType.Password || field.type == FieldType.NewPassword
    return <Form.Group id={field.type.name}>
        <Form.ControlLabel>{field.type.name}</Form.ControlLabel>
        {
            isPassword ?
                <Form.Control name="password" type="password" autoComplete="off" onChange={(value: string) => onChange(value)} /> :
                <Form.Control name="name" defaultValue={field.value} onChange={(value: string) => onChange(value)} />
        }
        {
            field.error && <Form.HelpText style={{ color: "red" }}>{field.error}</Form.HelpText>
        }
    </Form.Group>
}