// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom"
import LandingPage from "../pages/LandingPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage></LandingPage>
    },
    
])
export default router;