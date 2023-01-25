
interface OrderDetailHeaderProps {
    title: string
}

export default function OrderDetailHeader({ title }: OrderDetailHeaderProps) {
    return <div style={{ marginLeft: 4, marginTop: 18, marginBottom: 12 }}>{title}</div>
}