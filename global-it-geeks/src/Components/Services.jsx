import { motion } from "framer-motion";

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
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl font-bold text-primary">
                        Services We Provide
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Beyond training, we partner with companies and institutions to
                        deliver impactful learning and technical solutions.
                    </p>
                </div>

                {/* Service Cards */}
                <div className="grid md:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="border rounded-xl p-8 hover:shadow-lg transition"
                        >
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-primary">
                                {service.title}
                            </h3>
                            <p className="mt-3 text-gray-600">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
