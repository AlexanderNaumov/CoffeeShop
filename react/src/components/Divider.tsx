
export default function Divider(props: { indent?: number }) {
    return <div style={{ background: "white" }}>
        <div style={{ height: 1, marginLeft: props.indent, marginRight: props.indent, background: "lightGray" }} />
    </div>
}