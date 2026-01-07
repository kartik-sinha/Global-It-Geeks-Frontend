import { useState } from "react";
import "../Styles/Contact.css";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const response = await fetch("http://localhost:8080/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    subject,
                    message,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            setStatus("Message sent successfully!");
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
        } catch (error) {
            setStatus("Something went wrong. Please try again.");
        }
    };

    return (
        <section className="contact-section">
            <div className="contact-container">
                <h2 className="contact-title">Get in Touch</h2>
                <p className="contact-intro">
                    Have a question or need more information?
                    Send us a message and we’ll respond shortly.
                </p>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="contact-field">
                        <label>Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="contact-field">
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="contact-field">
                        <label>Subject</label>
                        <input
                            type="text"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />
                    </div>

                    <div className="contact-field">
                        <label>Message</label>
                        <textarea
                            rows="5"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="contact-submit">
                        Send Message
                    </button>

                    {status && <p className="contact-status">{status}</p>}
                </form>
            </div>
        </section>
    );
}
