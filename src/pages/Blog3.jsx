/* eslint-disable no-unused-vars */
import React from 'react';
import book from '../assets/book.jpeg';

const BlogsDes = () => {
  return (
    <div>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-black antialiased">
        <div className="px-4 mx-auto max-w-screen-xl">
          {/* Image on top for mobile view */}
          <figure className="mb-8 lg:hidden text-center">
            <img
              src={book}
              alt="Book cover"
              className="w-full h-auto rounded-lg shadow-lg shadow-black/20"
            />
            <figcaption></figcaption>
          </figure>

          <div className="flex flex-col-reverse lg:flex-row justify-between">
            {/* Content on the bottom for mobile view */}
            <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
              <header className="mb-4 lg:mb-6 not-format">
                <address className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-white">
                    <img
                      className="mr-4 w-16 h-16 rounded-full shadow-lg"
                      src="https://avatars.githubusercontent.com/u/110277485?v=4"
                      alt="Profile of Soumargha Bhattacharjee"
                    />
                    <div>
                      <span className="text-xl font-bold text-white">Soumargha Bhattacharjee</span>
                      <p className="text-base text-gray-400">Full Stack Developer</p>
                    </div>
                  </div>
                </address>
                <h1
                  id="blog1"
                  className="mb-4 text-3xl font-extrabold leading-tight lg:mb-6 lg:text-4xl text-white"
                >
                  Unveiling the Power of Data Analytics: A Comprehensive Guide
                </h1>
              </header>
              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                In today's data-driven world, the significance of data analytics cannot be overstated.
                As businesses and industries harness the power of data to make informed decisions, data
                analytics emerges as a critical tool. Let's embark on a journey to explore the
                intricacies, applications, and transformative potential of data analytics.
              </p>
              <h2 className="text-2xl font-bold text-white mb-4">Introduction: The Data Revolution</h2>
              <p className="mb-6 text-gray-300">
                Data analytics stands at the forefront of the data revolution, enabling organizations
                to extract valuable insights from vast and complex datasets. From business
                intelligence to scientific research, data analytics empowers decision-makers with the
                tools to gain a deeper understanding of trends, patterns, and correlations.
              </p>
              <h2 className="text-2xl font-bold text-white mb-4">The Core Components of Data Analytics</h2>
              <ul className="list-disc list-inside mb-6 text-gray-300">
                <li><strong>Descriptive Analytics:</strong> Understanding the Past</li>
                <li><strong>Diagnostic Analytics:</strong> Unraveling the Why</li>
                <li><strong>Predictive Analytics:</strong> Forecasting the Future</li>
                <li><strong>Prescriptive Analytics:</strong> Guiding Decision-Making</li>
              </ul>
              <h2 className="text-2xl font-bold text-white mb-4">Applications Across Industries</h2>
              <ul className="list-disc list-inside mb-6 text-gray-300">
                <li><strong>Business and Finance:</strong> Enhancing Decision-Making</li>
                <li><strong>Healthcare:</strong> Transforming Patient Care</li>
                <li><strong>E-Commerce and Marketing:</strong> Tailoring Experiences</li>
              </ul>
              <h2 className="text-2xl font-bold text-white mb-4">Challenges and Opportunities</h2>
              <p className="mb-6 text-gray-300">
                While data analytics presents immense opportunities, it also comes with challenges.
                Issues of data quality, security, and ethical considerations require careful attention.
                Organizations must strike a balance between leveraging data for innovation and ensuring
                responsible and ethical use.
              </p>
              <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
              <p className="text-gray-300">
                As we navigate the vast landscape of data analytics, it's clear that the insights derived
                from data have the potential to reshape industries, drive innovation, and empower
                decision-makers. Embracing data analytics is not just a technological shift but a strategic
                imperative for organizations seeking a competitive edge in an increasingly data-centric
                world.
              </p>
            </article>

            {/* Image on the right for larger screens */}
            <figure className="hidden lg:block ml-8 mt-14 px-9">
              <img
                src={book}
                alt="Book cover"
                className="w-100 h-auto rounded-lg shadow-lg shadow-black/20"
              />
              <figcaption></figcaption>
            </figure>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogsDes;
