import Testimonials from "../Components/Testimonials.jsx";
import Hero from "../Components/Hero.jsx";
import "../Styles/Home.css";

export default function Home() {
    return (
        <div className="page">
            <div className="hero">
                <div className="hero-content">
                    <h1 className="brand-title">Global IT Geeks</h1>
                    <p className="brand-tagline">
                        <u>The Learning Experience</u>
                    </p>
                </div>
            </div>

            <Hero />
            <Testimonials />
        </div>
    );
}
