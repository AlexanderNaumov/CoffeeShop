import { IconButton, Stack } from "rsuite"
import PlusIcon from "@rsuite/icons/Plus"
import MinusIcon from "@rsuite/icons/Minus"

interface ProductQtyButtonsProps {
    size?: "md" | "xs"
    qty: number
    inc: () => void
    dec: () => void
}

export default function ProductQtyButtons({ size = "md", qty, inc, dec }: ProductQtyButtonsProps) {
    return qty == 0 ?
        <IconButton size={size} icon={<PlusIcon />} style={{ width: 100 }} onClick={event => {
            event.stopPropagation()
            inc()
        }} />
        : <Stack spacing={size == "md" ? 16 : 10}>
            <IconButton size={size} icon={<PlusIcon />} onClick={event => {
                event.stopPropagation()
                inc()
            }} />
            <div style={{ fontSize: size == "md" ? 20 : 16 }}>{qty}</div>
            <IconButton size={size} icon={<MinusIcon />} onClick={event => {
                event.stopPropagation()
                dec()
            }} />
        </Stack>
}