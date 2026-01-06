import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Companies from "../components/Companies";
import About from "../components/About";
import Trainings from "../components/Trainings";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

import PaymentCTA from "../components/PaymentCTA";
import Footer from "../components/Footer";
import "../Styles/Home.css";

export default function Home() {
    return (
        <>
            <div className="hero">
                {/* Navbar */}
                <Navbar/>

                {/* Centered Content */}
                <div className="hero-content">
                    <h1 className="brand-title">
                        Global IT Geeks
                    </h1>
                    <p className="brand-tagline">
                        <u>The Learning Experience</u>
                    </p>
                </div>
            </div>
            <Hero />
            {/*<Companies />*/}
            {/*<About />*/}
            {/*<Trainings />*/}
            <Testimonials />
            {/*<PaymentCTA />*/}
            <Footer />
        </>
    );
}
