import { useState } from "react";
import "../Styles/PaymentCTA.css";

export default function PaymentCTA() {
    const [amount, setAmount] = useState("");
    const [status, setStatus] = useState("idle"); // idle | loading | success | error
    const [error, setError] = useState("");

    const handlePayment = async () => {
        if (!amount || amount <= 0) {
            setError("Please enter a valid amount");
            return;
        }

        setStatus("loading");
        setError("");

        try {
            const response = await fetch("http://localhost:8080/api/payment/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ amount }),
            });

            if (!response.ok) {
                throw new Error("Payment failed");
            }

            setStatus("success");
        } catch (err) {
            setStatus("error");
            setError("Unable to initiate payment. Try again.");
        }
    };

    return (
        <section className="payment-section">
            <h2 className="payment-title">Ready to Start Your Journey?</h2>
            <p className="payment-subtitle">
                Enter the amount and proceed to payment
            </p>

            <div className="payment-box">
                <input
                    type="number"
                    placeholder="Enter amount (₹)"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="payment-input"
                />

                <button
                    onClick={handlePayment}
                    disabled={status === "loading"}
                    className={`payment-btn ${
                        status === "success" ? "success" : ""
                    }`}
                >
                    {status === "loading" && "Processing..."}
                    {status === "idle" && "Pay & Enroll"}
                    {status === "success" && "Payment Initiated ✓"}
                    {status === "error" && "Retry"}
                </button>

                {error && <p className="payment-error">{error}</p>}
            </div>
        </section>
    );
}
