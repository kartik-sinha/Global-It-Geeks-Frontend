
import "../Styles/Contact.css";

export default function Contact() {
    return (
        <section className="contact-section">
            <div className="contact-container">
                {/* Opening line */}
                <h2 className="contact-title">Get in Touch</h2>
                <p className="contact-intro">
                    Have a question about our trainings or services?
                    Reach out to us and we’ll get back to you shortly.
                </p>

                {/* Contact form */}
                <form
                    className="contact-form"
                    action="mailto:kartiksinha520@gmail.com"
                    method="POST"
                    encType="text/plain"
                >
                    <div className="contact-field">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your name"
                            required
                        />
                    </div>

                    <div className="contact-field">
                        <label htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="Subject"
                            required
                        />
                    </div>

                    <div className="contact-field">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Write your message here..."
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="contact-submit">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
