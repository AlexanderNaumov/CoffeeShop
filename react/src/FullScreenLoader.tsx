import { Loader } from "rsuite"

export default function FullScreenLoader() {
    return <div style={{ width: "100%", top: 0, bottom: 0, position: "absolute", background: "rgba(1, 1, 1, 0.2)", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Loader size="md" />
    </div>
}