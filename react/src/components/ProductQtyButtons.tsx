import { IconButton, Stack } from "rsuite"
import PlusIcon from '@rsuite/icons/Plus'
import MinusIcon from '@rsuite/icons/Minus'

export default function ProductQtyButtons(props: { qty: number, inc: () => void, dec: () => void }) {
    let { qty, inc, dec } = props
    return qty == 0 ?
        <IconButton icon={<PlusIcon />} style={{ width: 100 }} onClick={event => {
            event.stopPropagation()
            inc()
        }} /> :
        <Stack spacing={16}>
            <IconButton icon={<PlusIcon />} onClick={event => {
                event.stopPropagation()
                inc()
            }} />
            <div style={{ fontSize: 20 }}>{qty}</div>
            <IconButton icon={<MinusIcon />} onClick={event => {
                event.stopPropagation()
                dec()
            }} />
        </Stack>
}