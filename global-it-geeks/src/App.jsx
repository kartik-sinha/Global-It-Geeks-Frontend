

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Trainings from "./pages/Trainings";
import Services from "./Components/Services.jsx";
import About from "./Pages/About.jsx";
import Contact from "./pages/Contact";

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Trainings />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}
