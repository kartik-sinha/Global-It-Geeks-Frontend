import { trainings } from "../data/trainings";
import "../Styles/Trainings.css";

export default function Trainings() {
    return (
        <section className="trainings-section">
            <h2 className="trainings-title">
                Trainings We Offer
            </h2>

            <div className="trainings-grid">
                {trainings.map((t) => (
                    <div key={t.title} className="training-card">
                        <img
                            src={t.imageURL}
                            alt={t.title}
                            className="training-image"
                        />
                        <h3 className="training-title">{t.title}</h3>
                        <p className="training-stack">{t.stack}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
