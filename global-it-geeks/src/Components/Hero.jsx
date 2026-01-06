export default function Hero() {
    return (
        <section className="pt-32 bg-slate-100">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">
                <div>
                    <h1 className="text-4xl font-bold text-primary leading-tight">
                        Industry-Ready IT Training by Professionals
                    </h1>
                    <p className="mt-4 text-gray-600">
                        Learn real-world skills. Build production-grade projects. Get job-ready.
                    </p>
                    <div className="mt-6 space-x-4">
                        <button className="bg-accent text-white px-6 py-3 rounded">
                            View Trainings
                        </button>
                        <button className="border px-6 py-3 rounded">
                            Talk to Mentor
                        </button>
                    </div>
                </div>

                <div className="bg-gray-300 h-72 rounded-lg flex items-center justify-center">
                    {/* Video / Image Placeholder */}
                    <span className="text-gray-700">Training Video Placeholder</span>
                </div>
            </div>
        </section>
    );
}
