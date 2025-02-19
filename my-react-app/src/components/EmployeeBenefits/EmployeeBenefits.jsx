import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';

const EmployeeBenefits = () => {

    
          const { isDarkMode, toggleTheme } = useContext(ThemeContext)
    return (
        <section className={`py-12 ${isDarkMode ? "bg-dark text-white ":"bg-white text-dark"}`}>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center ">Employee Benefits</h2>
                <p className="mt-4 text-center text-lg text-gray-600">Explore the benefits we offer to our employees to ensure their well-being and growth.</p>

                <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="500">
                        <h3 className="text-2xl font-semibold text-gray-800">Health Insurance</h3>
                        <p className="mt-4 text-gray-600">
                            Comprehensive health insurance coverage for all employees, including medical, dental, and vision plans.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-down" data-aos-delay="500">
                        <h3 className="text-2xl font-semibold text-gray-800">Paid Time Off</h3>
                        <p className="mt-4 text-gray-600">
                            Enjoy paid vacation days, sick leave, and holidays to ensure work-life balance and personal well-being.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="500">
                        <h3 className="text-2xl font-semibold text-gray-800">Retirement Plans</h3>
                        <p className="mt-4 text-gray-600">
                            We offer retirement savings plans with company contributions to help secure your financial future.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-down" data-aos-delay="500">
                        <h3 className="text-2xl font-semibold text-gray-800">Employee Assistance Program</h3>
                        <p className="mt-4 text-gray-600">
                            Access to counseling services, financial advice, and support for personal and professional challenges.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="500">
                        <h3 className="text-2xl font-semibold text-gray-800">Professional Development</h3>
                        <p className="mt-4 text-gray-600">
                            We provide opportunities for employees to attend training sessions, conferences, and workshops for skill development.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-down" data-aos-delay="500">
                        <h3 className="text-2xl font-semibold text-gray-800">Wellness Programs</h3>
                        <p className="mt-4 text-gray-600">
                            Participate in wellness programs and activities such as fitness challenges and mental health support.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EmployeeBenefits;
