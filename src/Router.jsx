import { Route, Routes } from "react-router-dom"
import { AnimePage, Episodes, Home } from "./pages";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/episode/:id" element={<Episodes />} />
            <Route path="/anime/:animeName" element={<AnimePage />} />
        </Routes>
    )
}

export { Router };