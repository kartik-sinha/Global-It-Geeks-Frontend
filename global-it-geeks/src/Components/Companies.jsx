export default function Companies() {
    return (
        <section className="py-16">
            <h2 className="text-center text-xl font-semibold mb-8">
                Curriculum Aligned With Industry Needs
            </h2>
            <div className="flex justify-center gap-10 opacity-60">
                {["Java", "Spring", "React", "AWS", "Docker"].map((c) => (
                    <div key={c} className="text-lg font-bold">{c}</div>
                ))}
            </div>
        </section>
    );
}
