/* eslint-disable react/no-unescaped-entities */
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
            <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue format-invert">
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
                  Unleashing Innovation: Exploring the MediaTek Dimensity 9300 Chip
                </h1>
              </header>
              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                In the dynamic realm of mobile technology, the MediaTek Dimensity 9300 chip has emerged
                as a powerhouse, setting new standards for performance, connectivity, and efficiency.
                Let's embark on a journey to unravel the intricacies of this cutting-edge chip and
                understand how it is shaping the future of mobile devices.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">
                Introduction: The Rise of MediaTek Dimensity 9300
              </h2>
              <p className="mb-6 text-gray-300">
                The MediaTek Dimensity 9300 chip represents a leap forward in mobile processing
                technology, integrating advanced features to meet the demands of modern smartphones and
                other smart devices. As a part of the Dimensity series, this chip stands out for its
                balance of high-performance capabilities and power efficiency.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">
                Key Features and Specifications
              </h2>
              <ul className="list-disc list-inside mb-6 text-gray-300">
                <li><strong>Advanced Architecture:</strong> The Dimensity 9300 boasts a sophisticated architecture, combining powerful CPU and GPU cores to deliver seamless multitasking, smooth gaming experiences, and efficient power management.</li>
                <li><strong>5G Connectivity:</strong> Positioned at the forefront of innovation, the chip integrates 5G capabilities, unlocking ultra-fast data speeds and low-latency connectivity.</li>
                <li><strong>AI-Powered Enhancements:</strong> AI plays a pivotal role in the Dimensity 9300's capabilities, from image processing to intelligent resource allocation.</li>
                <li><strong>Camera and Imaging:</strong> It supports high-resolution sensors, multiple camera setups, and cutting-edge image processing technologies for stunning visuals.</li>
                <li><strong>Efficient Power Management:</strong> Optimizes energy consumption for prolonged battery life, reducing the need for frequent recharges.</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">
                Implications for Mobile Devices
              </h2>
              <ul className="list-disc list-inside mb-6 text-gray-300">
                <li><strong>Flagship-Level Performance:</strong> Enables smartphones to deliver flagship-level performance with 5G connectivity.</li>
                <li><strong>Enhanced Gaming Experiences:</strong> The advanced GPU cores ensure smooth and immersive gaming experiences.</li>
                <li><strong>Future-Ready Connectivity:</strong> Positions mobile devices at the forefront of 5G-enabled applications and experiences.</li>
                <li><strong>Innovations in Photography:</strong> Advanced imaging capabilities empower smartphones to capture stunning visuals with improved camera performance.</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">
                Conclusion: Paving the Way for Mobile Innovation
              </h2>
              <p className="text-gray-300">
                The MediaTek Dimensity 9300 chip stands as a testament to the relentless pursuit of
                innovation in mobile technology. From 5G connectivity to AI-powered enhancements, this
                chip encapsulates the future of mobile processing, promising a new era of high-performance,
                efficient, and feature-rich devices.
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
