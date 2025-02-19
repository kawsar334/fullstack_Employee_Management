


import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { ThemeContext } from '../../context/ThemeProvider';

const ContactUs = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('https://server-wheat-xi.vercel.app/api/message/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, message }),
        });

        if (response.ok) {
            setStatus('Message sent successfully!');
            toast.success("Message sent successfully!")
            setEmail('');
            setMessage('');
        } else {
            setStatus('Failed to send the message. Try again.');
        }
    };

    return (
        <div className={`flex justify-center items-center gap-4 flex-col  ${isDarkMode ? "bg-dark text-white" : "text-dark bg-white"}  py-8`}>
            <h1 className="text-4xl font-semibold text-center mb-6 ">Contact Us</h1>
            <div className="bg-gradient-to-t  shadow rounded-lg p-6 w-full max-w-2xl mx-auto border">

                <div className={`mb-8 ${isDarkMode ? "text-white" : 'text-gray-600'}`}>
                    <h2 className="text-2xl font-semibold capitalize mb-4">Our Information</h2>
                    <p><strong>Address:</strong> Taif , soudi arabia,</p>
                    <p><strong>Email:</strong> kawsarfiroz11@gmail.com</p>
                    <p><strong>Phone:</strong> +966509325731</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <label className={`${isDarkMode ? "text-white" : "text-dark"} font-medium`}>Email:</label>
                    <input
                        type="email"
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="border px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-text w-full"
                    />

                    <label className={`${isDarkMode ? "text-white" : "text-dark"} font-medium`}>Message:</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        placeholder='Message'
                        className="border px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-text w-full h-32"
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-main text-white font-semibold rounded-lg shadow-md hover:bg-text transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Send Message
                    </button>

                    {status && (
                        <p className={`mt-4 text-center font-medium ${status.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                            {status}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default ContactUs;

