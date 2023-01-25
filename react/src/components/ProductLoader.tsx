import { Loader } from "rsuite"

interface ProductLoaderProps {
    size?: "md" | "sm"
    padding?: number
    borderRadius?: number
}

export default function ProductLoader({ size = "md", padding, borderRadius }: ProductLoaderProps) {
    return <div style={{ top: 0, left: 0, right: 0, bottom: 0, padding: padding, position: "absolute" }}>
        <div style={{ background: "rgba(1, 1, 1, 0.05)", width: "100%", height: "100%", borderRadius: borderRadius, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Loader size={size} />
        </div>
    </div>
}