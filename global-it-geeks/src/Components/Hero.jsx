import "../Styles/Hero.css";

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-layout">

                {/* LEFT SIDE */}
                <div className="hero-text">
                    <h1 className="hero-title">
                        Industry-Ready IT Training by Professionals
                    </h1>

                    <p className="hero-description">
                        Learn real-world software engineering skills through hands-on projects,
                        modern tools, and industry-driven curriculum designed for today’s tech
                        landscape.
                    </p>
                </div>

                {/* RIGHT SIDE */}
                <div className="hero-services">
                    <p>
                        Master core programming concepts including data structures, algorithms,
                        object-oriented design, and problem-solving techniques that form the
                        backbone of every software role.
                    </p>

                    <p>
                        Understand the principles behind AI systems, machine learning models,
                        and data-driven decision making, with practical exposure to real-world
                        use cases.
                    </p>

                    <p>
                        Learn how modern systems are automated using CI/CD pipelines, scripting,
                        and infrastructure automation to build scalable and reliable applications.
                    </p>

                    <p>
                        Gain hands-on experience with cloud platforms, deployment strategies,
                        and distributed systems used in production-grade software environments.
                    </p>
                </div>

            </div>
        </section>
    );
}
