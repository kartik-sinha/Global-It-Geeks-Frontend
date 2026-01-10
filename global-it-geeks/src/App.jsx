import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AnimatedRoutes from "./AnimatedRoutes";

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <AnimatedRoutes />
            <Footer />
        </BrowserRouter>
    );
}
