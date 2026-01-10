import { useEffect } from "react";
import Testimonials from "../Components/Testimonials.jsx";
import Hero from "../Components/Hero.jsx";
import "../Styles/Home.css";

export default function Home() {

    useEffect(() => {
        const hero = document.querySelector(".hero-content");
        const glow = document.querySelector(".cursor-glow");

        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 60;
            const y = (e.clientY / window.innerHeight - 0.5) * 60;

            hero.style.transform = `translate(${x}px, ${y}px)`;
            glow.style.transform = `translate(${x * 1.5}px, ${y * 1.5}px)`;
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="page">
            <section className="hero">
                <div className="cursor-glow"></div>

                <div className="hero-content">
                    <h1 className="brand-title">Global IT Geeks</h1>
                    <p className="brand-tagline">The Learning Experience</p>
                </div>
            </section>

            <Hero />
            <Testimonials />
        </div>
    );
}
