import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
 const { isDarkMode, toggleTheme } = useContext(ThemeContext)
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            setMessage("Please enter a valid email.");
            return;
        }
        setTimeout(() => {
            setMessage("Thank you for subscribing! 🎉");
            setEmail("");
        }, 1000);
    };

    return (
        <div className={`w-full py-[100px] ${isDarkMode?"bg-main":"bg-main"}`}>
            <div className="max-w-3xl mx-auto text-center px-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    📩 Subscribe to Our Newsletter
                </h2>
                <p className="text-gray-600 mb-6">
                    Stay updated with the latest news and exclusive deals!
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-text text-white px-6 py-3 rounded-lg font-semibold hover:bg-main border transition"
                    >
                        Subscribe
                    </button>
                </form>

                {message && <p className="text-green-600 mt-3">{message}</p>}
            </div>
        </div>
    );
};

export default Newsletter;
