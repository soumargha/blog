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
            <img src={book} alt="" className="w-full h-auto rounded-lg shadow-lg shadow-black/20" />
          </figure>

          <div className="flex flex-col-reverse lg:flex-row justify-between">
            {/* Content for mobile view */}
            <article className="w-full lg:w-2/3 mx-auto max-w-2xl format format-sm sm:format-base lg:format-lg format-blue format-invert">
              <header className="mb-4 lg:mb-6 not-format">
                <address className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-white">
                    <img
                      className="mr-4 w-16 h-16 rounded-full"
                      src="https://avatars.githubusercontent.com/u/110277485?v=4"
                      alt="Soumargha Bhattacharjee"
                    />
                    <div>
                      <a href="#" className="text-xl font-bold text-white">Soumargha Bhattacharjee</a>
                      <p className="text-base text-gray-400">Full stack developer</p>
                      <p className="text-base text-gray-400">
                        <time dateTime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time>
                      </p>
                    </div>
                  </div>
                </address>
                <h1 className="mb-4 text-3xl font-extrabold leading-tight lg:mb-6 lg:text-4xl text-white">
                  Unveiling Gemini AI: A Revolutionary Leap in Artificial Intelligence
                </h1>
              </header>

              <section className="leading-relaxed text-gray-300">
                <p>
                  Artificial Intelligence (AI) has been a transformative force, pushing the boundaries of what we once deemed possible. In this fast-evolving landscape, a new player has emerged, making waves and capturing the attention of tech enthusiasts and industry experts alike – Gemini AI.
                </p>
                
                <h2 className="mt-8 mb-4 text-2xl font-bold text-white">Genesis of Gemini AI</h2>
                <p>
                  Gemini AI, named after the zodiac sign Gemini, the twins, embodies the dual nature of its capabilities. Launched in [Year], Gemini AI is the brainchild of a team of brilliant minds dedicated to pushing the frontiers of AI innovation. Their vision is clear: to create a platform that not only understands human interactions but also learns and evolves in real-time.
                </p>

                <h2 className="mt-8 mb-4 text-2xl font-bold text-white">Key Features</h2>
                <ul className="list-disc ml-6 space-y-4">
                  <li>
                    <strong>Dynamic Learning Architecture:</strong> Gemini AI adapts and learns from every interaction, allowing it to stay ahead of the curve.
                  </li>
                  <li>
                    <strong>Natural Language Processing (NLP) Mastery:</strong> Advanced NLP algorithms enable it to understand context, nuances, and emotions in language.
                  </li>
                  <li>
                    <strong>Multimodal Integration:</strong> Gemini AI integrates with text, images, audio, and video for versatile applications.
                  </li>
                  <li>
                    <strong>Real-time Problem Solving:</strong> It actively engages in real-time solutions, making it valuable across industries.
                  </li>
                  <li>
                    <strong>Privacy and Security:</strong> Gemini AI ensures top-notch security, allowing users control over their data.
                  </li>
                </ul>

                <h2 className="mt-8 mb-4 text-2xl font-bold text-white">Industry Applications</h2>
                <p>
                  <strong>Healthcare:</strong> Assisting medical professionals with diagnostics and personalized patient interactions.
                </p>
                <p>
                  <strong>Finance:</strong> Real-time market analysis, fraud detection, and personalized financial advice.
                </p>
                <p>
                  <strong>Education:</strong> Customizes content and assists educators in creating engaging materials.
                </p>
                <p>
                  <strong>E-commerce:</strong> Provides personalized shopping experiences, boosting sales.
                </p>

                <h2 className="mt-8 mb-4 text-2xl font-bold text-white">The Road Ahead</h2>
                <p>
                  As Gemini AI evolves, its developers envision even broader applications. From contributing to scientific research to revolutionizing creative industries, the possibilities are boundless.
                </p>
              </section>
            </article>

            {/* Image on the right for larger screens */}
            <figure className="hidden lg:block lg:w-1/3 ml-8 mt-14">
              <img src={book} alt="Book Image" className="w-full h-auto rounded-lg shadow-lg shadow-black/20" />
            </figure>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogsDes;
