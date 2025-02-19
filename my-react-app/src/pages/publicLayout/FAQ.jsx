import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

const FAQ = () => {

    const { isDarkMode } = useContext(ThemeContext);

    const faqs = [
        {
            question: "What is the Employee Management System?",
            answer:
                "The Employee Management System helps organizations track employee records, attendance, performance, and more in a centralized platform.",
        },
        {
            question: "How do I add a new employee?",
            answer:
                "To add a new employee, go to the 'Employees' section, click 'Add Employee,' fill in the required details, and submit the form.",
        },
        {
            question: "Can I edit an employee’s details after adding them?",
            answer:
                "Yes, you can edit employee details by selecting the employee profile and clicking the 'Edit' button.",
        },
        {
            question: "Does this system support role-based access?",
            answer:
                "Yes, admins can assign different roles (e.g., Manager, HR, Employee) with specific permissions.",
        },
        {
            question: "Is the system mobile-friendly?",
            answer:
                "Yes, the Employee Management System is fully responsive and works on desktops, tablets, and mobile devices.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index); 
    };

    return (
        <section className={`py-12  px-4 ${isDarkMode?"bg-dark text-white":"bg-white text-dark"}`}>
            <h2 className={`${isDarkMode ? "text-3xl font-bold text-center bg-dark text-white mb-8" : "text-3xl font-bold text-center text-gray-800 mb-8"}`}>Frequently Asked Questions</h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 bg-transparent">
                {faqs?.map((faq, index) => (
                    <div key={faq.id} className="mb-4  h-max ">
                        <button
                            data-aos="fade-up"
                            onClick={() => toggleAnswer(index)}
                            className="w-full text-left bg-white border p-4 rounded-lg shadow-md flex justify-between items-center"
                        >
                            <span className="text-xl font-semibold text-gray-800">{faq.question}</span>
                            <span className="text-xl font-bold text-gray-600">
                                {activeIndex === index ? "-" : "+"}
                            </span>
                        </button>
                        {activeIndex === index && (
                            <div className="bg-gray-100  p-4 mt-2 rounded-lg" data-aos="fade-down">
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
