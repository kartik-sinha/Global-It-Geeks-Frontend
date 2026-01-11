import { useState } from "react";
import "../Styles/PaymentCTA.css";

export default function PaymentCTA() {
    const [amount, setAmount] = useState("");
    const [status, setStatus] = useState("idle");
    // idle | loading | success | error

    const handlePayment = async () => {
        if (!amount || amount <= 0) {
            setStatus("error");
            return;
        }

        try {
            setStatus("loading");

            // 1️⃣ Create order
            const res = await fetch("http://localhost:8080/api/payment/create-order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount }),
            });

            if (!res.ok) throw new Error("Order creation failed");

            const order = await res.json();

            // 2️⃣ Razorpay Checkout
            const options = {
                key: "rzp_test_S2HPbGUNue9jA5",
                amount: order.amount,
                currency: "INR",
                name: "Global IT Geeks",
                description: "Training Enrollment",
                order_id: order.id,

                handler: async function (response) {
                    try {
                        const verifyRes = await fetch(
                            "http://localhost:8080/api/payment/verify",
                            {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({
                                    razorpayOrderId: response.razorpay_order_id,
                                    razorpayPaymentId: response.razorpay_payment_id,
                                    razorpaySignature: response.razorpay_signature,
                                }),
                            }
                        );

                        if (!verifyRes.ok) throw new Error("Verification failed");

                        setStatus("success");
                        setAmount("");
                    } catch (err) {
                        setStatus("error");
                    }
                },

                modal: {
                    ondismiss: () => {
                        setStatus("idle"); // user closed Razorpay
                    },
                },

                theme: { color: "#4f46e5" },
            };

            const razor = new window.Razorpay(options);
            razor.open();

        } catch (err) {
            setStatus("error");
        }
    };

    return (
        <section className="payment-section">
            <h2 className="payment-title">Enroll Now</h2>

            <div className={`payment-box ${status}`}>
                <input
                    className="payment-input"
                    type="number"
                    placeholder="Enter amount (₹)"
                    value={amount}
                    disabled={status === "loading"}
                    onChange={(e) => setAmount(e.target.value)}
                />

                <button
                    className="payment-btn"
                    onClick={handlePayment}
                    disabled={status === "loading"}
                >
                    {status === "loading" ? "Processing..." : "Pay"}
                </button>
            </div>

            {status === "success" && (
                <div className="payment-success">✓ Payment Successful</div>
            )}

            {status === "error" && (
                <div className="payment-error">✕ Payment Failed</div>
            )}
        </section>
    );
}
