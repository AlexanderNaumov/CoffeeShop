import { IconButton, Stack } from "rsuite"
import PlusIcon from "@rsuite/icons/Plus"
import MinusIcon from "@rsuite/icons/Minus"

export default function ProductQtyButtons(props: { size?: "md" | "xs", qty: number, inc: () => void, dec: () => void }) {
    let { size, qty, inc, dec } = props
    let _size = size ?? "md"
    return qty == 0 ?
        <IconButton size={_size} icon={<PlusIcon />} style={{ width: 100 }} onClick={event => {
            event.stopPropagation()
            inc()
        }} /> :
        <Stack spacing={_size == "md" ? 16 : 10}>
            <IconButton size={_size} icon={<PlusIcon />} onClick={event => {
                event.stopPropagation()
                inc()
            }} />
            <div style={{ fontSize: _size == "md" ? 20 : 16 }}>{qty}</div>
            <IconButton size={_size} icon={<MinusIcon />} onClick={event => {
                event.stopPropagation()
                dec()
            }} />
        </Stack>
}