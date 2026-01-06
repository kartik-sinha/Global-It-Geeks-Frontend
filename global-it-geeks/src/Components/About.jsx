export default function About() {
    return (
        <section className="bg-slate-100 py-20">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">
                <div className="bg-gray-300 h-64 rounded" />
                <div>
                    <h2 className="text-3xl font-bold">About Us</h2>
                    <p className="mt-4 text-gray-600">
                        We provide industry-focused IT training delivered by professionals
                        with real project experience.
                    </p>
                    <ul className="mt-6 space-y-2">
                        <li>✔ Real-world projects</li>
                        <li>✔ Small batches</li>
                        <li>✔ Interview-focused curriculum</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
