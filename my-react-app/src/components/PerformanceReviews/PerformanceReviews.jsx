import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';

const PerformanceReviews = () => {

      const { isDarkMode, toggleTheme } = useContext(ThemeContext)
    return (
        <section className={`py-12 ${isDarkMode?"bg-dark text-white ":"bg-white text-dark"}`}>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center text-dark">Performance Reviews</h2>
                <p className="mt-4 text-center text-lg text-gray-600">Learn about our performance review process and how we evaluate employee performance.</p>

                <div className="mt-8 grid md:grid-cols-2 gap-8" data-aos="zoom-in" data-aos-delay="500">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-dark ">Review Process</h3>
                        <p className="mt-4 text-gray-600">
                            Performance reviews are conducted annually to assess employee performance, set goals for the upcoming year, and identify areas for growth. Managers provide feedback on key performance indicators and career development.
                        </p>
                    </div>

                    <div data-aos="zoom-in" data-aos-delay="500" className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold  text-dark">Evaluation Criteria</h3>
                        <ul className="mt-4 list-disc pl-6 text-gray-600">
                            <li>Work quality and productivity</li>
                            <li>Communication and collaboration</li>
                            <li>Problem-solving skills</li>
                            <li>Leadership and initiative</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PerformanceReviews;
