import { trainings } from "../data/trainings";

export default function Trainings() {
    return (
        <section className="py-20 max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
                Trainings We Offer
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
                {trainings.map((t) => (
                    <div key={t.title} className="border rounded-lg p-6 hover:shadow">
                        <h3 className="text-xl font-semibold">{t.title}</h3>
                        <p className="mt-2 text-gray-600">{t.stack}</p>
                        <p className="mt-2 text-sm">Duration: {t.duration}</p>
                        <button className="mt-4 text-accent font-semibold">
                            View Curriculum →
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
