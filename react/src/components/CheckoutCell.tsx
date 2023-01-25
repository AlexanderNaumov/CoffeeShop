import { List, Checkbox } from "rsuite"

interface CheckoutCellProps {
    title: string
    checked: boolean
    action: () => void
}

export default function CheckoutCell({ title, checked, action }: CheckoutCellProps) {
    return <List.Item>
        <Checkbox checked={checked} onClick={action} > {title} </Checkbox>
    </List.Item>
}