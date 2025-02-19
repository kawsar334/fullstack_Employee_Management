import React from "react";

const Help = () => {

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-main mb-4">Help & FAQs</h1>
            <p className="text-lg text-gray-700 mb-6">
                Below are some frequently asked questions about our Employee Management
                System. If you have further questions, feel free to contact support.
            </p>

            <div className="space-y-6">
                <div>
                    <h2 className="text-xl font-semibold text-gray-900">How do I log in?</h2>
                    <p className="text-gray-700">
                        Simply enter your registered email and password to log into the
                        system. If you encounter any issues, use the "Forgot Password"
                        feature to reset your password.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900">How can I request leave?</h2>
                    <p className="text-gray-700">
                        To request leave, navigate to the "Leave Requests" section, fill out
                        the leave form, and submit it for approval. Your manager will review
                        and approve or deny the request.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900">Can I update my personal information?</h2>
                    <p className="text-gray-700">
                        Yes, you can update your personal details from your profile page
                        under "Settings." Make sure your details are up to date for accurate
                        communication.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900">How do I view my performance reviews?</h2>
                    <p className="text-gray-700">
                        To view your performance reviews, go to the "Performance Reviews"
                        section under your dashboard. Your reviews will be displayed with
                        feedback from your manager.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900">I am having trouble with the system, who should I contact?</h2>
                    <p className="text-gray-700">
                        If you're facing any issues with the system, please contact our
                        support team via the "Contact" page or send an email to support@
                        [companyname].com.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Help;
