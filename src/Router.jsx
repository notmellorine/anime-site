import { Route, Routes } from "react-router-dom"
import { Episodes, Home } from "./pages";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/episode/:id" element={<Episodes />} />
        </Routes>
    )
}

export { Router };