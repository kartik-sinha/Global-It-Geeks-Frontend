import "../Styles/About.css";
import Contact from "../Components/Contact";

export default function About() {
    return (
        <>
            <section className="about-section">
                <div className="about-container">
                    <div className="about-image-placeholder"></div>

                    <div className="about-content">
                        <h2 className="about-title">About Us</h2>

                        <p className="about-description">
                            We provide industry-focused IT training delivered by professionals
                            with real project experience.
                        </p>

                        <ul className="about-list">
                            <li>✔ Real-world projects</li>
                            <li>✔ Small batches</li>
                            <li>✔ Interview-focused curriculum</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Contact section rendered below About */}
            <Contact />
        </>
    );
}
