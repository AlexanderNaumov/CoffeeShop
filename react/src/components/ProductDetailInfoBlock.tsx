import { Stack } from "rsuite";
import Divider from "./Divider";

interface ProductDetailInfoBlockProps {
    title: string
    content: string
}

export default function ProductDetailInfoBlock({ title, content }: ProductDetailInfoBlockProps) {
    return <div>
        <Stack justifyContent="space-between" style={{ background: "white", padding: 16 }}>
            <div style={{ fontSize: 18 }}>{title}</div>
            <div style={{ fontSize: 18, fontWeight: "bold" }}>{content}</div>
        </Stack>
        <Divider indent={16} />
    </div>
}