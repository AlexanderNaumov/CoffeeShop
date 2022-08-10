import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { StrictMode } from "react"
import App from "./App"

const app = document.getElementById("app")
const root = createRoot(app!!)
root.render(
    <StrictMode>
        <BrowserRouter>
             <App />
        </BrowserRouter>
    </StrictMode>
)