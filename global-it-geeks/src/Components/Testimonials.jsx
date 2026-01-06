import { useState } from "react";
import "../Styles/Testimonials.css";

const testimonials = [
    "The training focused heavily on real-world concepts, which helped me understand how software is actually built and deployed in professional environments.",
    "I finally understood core programming fundamentals clearly. The mentors explained complex topics in a very practical and approachable way.",
    "Hands-on projects and continuous feedback made a huge difference. I felt confident applying for roles after completing the training.",
    "The exposure to cloud and automation tools was excellent. It bridged the gap between theory and actual industry practices.",
    "Learning AI concepts with real examples helped me understand how intelligent systems work beyond just algorithms and math.",
    "The structured curriculum and mentor support made learning enjoyable and focused. I could see my progress week by week.",
    "This program helped me think like an engineer rather than just a coder. The emphasis on problem-solving was invaluable.",
    "The training gave me clarity on career direction and the confidence to work on production-level software systems."
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    const prev = (current - 1 + testimonials.length) % testimonials.length;
    const next = (current + 1) % testimonials.length;

    return (
        <section className="testimonials-section">
            <h2 className="testimonials-title">What Our Students Say</h2>

            <div className="carousel-wrapper">
                <button className="slider-btn left" onClick={() => setCurrent(prev)}>
                    ‹
                </button>

                <div className="carousel-stage">
                    <div className="testimonial-card prev">
                        “{testimonials[prev]}”
                    </div>

                    <div className="testimonial-card active">
                        “{testimonials[current]}”
                        <span className="student-name">— Student</span>
                    </div>

                    <div className="testimonial-card next">
                        “{testimonials[next]}”
                    </div>
                </div>

                <button className="slider-btn right" onClick={() => setCurrent(next)}>
                    ›
                </button>
            </div>
        </section>
    );
}
