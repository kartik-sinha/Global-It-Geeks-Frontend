import { motion } from "framer-motion";
import "../Styles/Services.css";

const services = [
    {
        title: "Corporate Training",
        description:
            "Customized upskilling programs for companies focusing on real-world tools, architectures, and best practices used in production systems.",
        icon: "🏢",
    },
    {
        title: "College & University Workshops",
        description:
            "Industry-oriented workshops and bootcamps designed to bridge the gap between academic curriculum and real software development.",
        icon: "🎓",
    },
    {
        title: "Mentorship & Consulting",
        description:
            "One-on-one mentorship, architecture guidance, and project consulting for students, startups, and early-stage teams.",
        icon: "🧠",
    },
];

export default function Services() {
    return (
        <section className="services-section">
            <div className="services-container">
                {/* Heading */}
                <div className="services-header">
                    <h2 className="services-title">Services We Provide</h2>
                    <p className="services-subtitle">
                        Beyond training, we partner with companies and institutions to
                        deliver impactful learning and technical solutions.
                    </p>
                </div>

                {/* Service Cards */}
                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="service-card"
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-card-title">
                                {service.title}
                            </h3>
                            <p className="service-card-description">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
