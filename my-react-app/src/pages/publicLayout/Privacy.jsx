import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="max-w-7xl mx-auto p-6 w-[95%] ">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-700 mb-6">
                At <span className="text-main font-semibold">Noukori Gulp</span>, we value your privacy and are committed to protecting
                your personal information. This policy outlines the types of data we
                collect and how we use, store, and protect it.
            </p>

            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">Information We Collect</h2>
                <p className="text-gray-700">
                    We collect personal information that you provide when using our system,
                    including your name, email address, phone number, and other relevant
                    details.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900">How We Use Your Data</h2>
                <p className="text-gray-700">
                    Your data is used to provide you with the best experience in the
                    Employee Management System, including processing payroll, tracking
                    attendance, and performance reviews.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900">Data Security</h2>
                <p className="text-gray-700">
                    We take appropriate measures to protect your personal information,
                    including encryption and secure servers.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900">Your Rights</h2>
                <p className="text-gray-700">
                    You have the right to access, modify, or delete your personal
                    information. Please contact us if you have any concerns or questions.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
