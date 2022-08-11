import { Loader } from "rsuite"

export default function ProductLoader(props: {size?: "md" | "sm", padding?: number, borderRadius?: number}) {
    let size = props.size ?? "md"
    return <div style={{ top: 0, left: 0, right: 0, bottom: 0, padding: props.padding, position: "absolute" }}>
        <div style={{ background: "rgba(1, 1, 1, 0.05)", width: "100%", height: "100%", borderRadius: props.borderRadius, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Loader size={size} />
        </div>
    </div>
}