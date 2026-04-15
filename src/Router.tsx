import { Route, Routes } from "react-router-dom"
import { DefaultLayout } from "./layouts";
import { Home } from "./pages";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    )
}

export { Router };