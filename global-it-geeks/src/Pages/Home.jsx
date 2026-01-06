import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import "../Styles/Home.css";

export default function Home() {
    return (
        <>
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
        </>
    );
}
