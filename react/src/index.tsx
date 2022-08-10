import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import React from "react"
import App from "./App"

const app = document.getElementById("app")
const root = createRoot(app!!)
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)