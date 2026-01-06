export default function Testimonials() {
    return (
        <section className="bg-slate-100 py-20">
            <h2 className="text-3xl text-center font-bold mb-12">
                What Our Students Say
            </h2>

            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-6">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white p-6 rounded shadow">
                        <div className="h-16 w-16 bg-gray-300 rounded-full mb-4" />
                        <p className="text-gray-600">
                            This training helped me crack my first job as a developer.
                        </p>
                        <p className="mt-4 font-semibold">Student Name</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
