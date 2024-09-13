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
            <img src={book} alt="Book Image" className="w-full h-auto rounded-lg shadow-lg shadow-black/20" />
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
                      <p className="text-base text-gray-400">Full Stack Developer</p>
                    </div>
                  </div>
                </address>
                <h1 className="mb-4 text-3xl font-extrabold leading-tight lg:mb-6 lg:text-4xl text-white">
                  GitHub Copilot: Revolutionizing Code Creation with AI Assistance
                </h1>
              </header>

              <section className="leading-relaxed text-gray-300">
                <p>
                  In the ever-evolving landscape of software development, efficiency and speed are paramount. GitHub Copilot, a groundbreaking tool introduced by GitHub in collaboration with OpenAI, is making waves as a revolutionary assistant that transforms the way developers write code. Let's delve into the world of GitHub Copilot and explore how it's reshaping the coding experience.
                </p>
                
                <h2 className="mt-8 mb-4 text-2xl font-bold text-white">Introduction to GitHub Copilot</h2>
                <p>
                  GitHub Copilot, launched in [Year], is an AI-powered code completion tool integrated directly into popular code editors, including Visual Studio Code. Developed by GitHub in partnership with OpenAI, Copilot leverages the power of OpenAI's Codex, a sophisticated language model capable of understanding and generating high-quality code.
                </p>

                <h2 className="mt-8 mb-4 text-2xl font-bold text-white">How GitHub Copilot Works</h2>
                <ul className="list-disc ml-6 space-y-4">
                  <li>
                    <strong>Powered by OpenAI's Codex:</strong> GitHub Copilot is fueled by Codex, a language model trained on diverse and extensive codebases. This enables Copilot to understand context, anticipate user intent, and generate code snippets that align with the developer's requirements.
                  </li>
                  <li>
                    <strong>Natural Language Interaction:</strong> Developers can describe the functionality they want, and Copilot generates corresponding code suggestions, making the coding process simpler.
                  </li>
                  <li>
                    <strong>Real-Time Code Suggestions:</strong> GitHub Copilot offers real-time code suggestions, significantly speeding up the coding workflow.
                  </li>
                  <li>
                    <strong>Language Agnostic Support:</strong> Copilot supports a wide range of programming languages, making it versatile for developers working in different tech stacks.
                  </li>
                </ul>

                <h2 className="mt-8 mb-4 text-2xl font-bold text-white">Advantages of GitHub Copilot</h2>
                <ul className="list-disc ml-6 space-y-4">
                  <li>
                    <strong>Increased Developer Productivity:</strong> With intelligent code suggestions, developers can focus more on complex problems while reducing time spent on routine tasks.
                  </li>
                  <li>
                    <strong>Enhanced Learning Experience:</strong> Copilot helps developers learn new languages or unfamiliar libraries by providing useful insights into syntax and best practices.
                  </li>
                  <li>
                    <strong>Accelerated Prototyping:</strong> Prototyping becomes faster as Copilot helps draft code snippets, allowing developers to experiment quickly.
                  </li>
                  <li>
                    <strong>Consistency Across Codebases:</strong> Copilot generates code that aligns with existing patterns, reducing inconsistencies and maintaining a cohesive codebase.
                  </li>
                </ul>

                <h2 className="mt-8 mb-4 text-2xl font-bold text-white">Challenges and Considerations</h2>
                <p>
                  While GitHub Copilot has gained widespread acclaim, there are some challenges, such as potential biases in code generation, the need for careful review of generated suggestions, and maintaining robust security practices.
                </p>

                <h2 className="mt-8 mb-4 text-2xl font-bold text-white">The Future of GitHub Copilot</h2>
                <p>
                  As GitHub Copilot continues to evolve, the future holds exciting possibilities. With the integration of more advanced AI models, expanded language support, and improved contextual understanding, the tool is poised to further revolutionize the coding process.
                </p>

                <h2 className="mt-8 mb-4 text-2xl font-bold text-white">Conclusion</h2>
                <p>
                  GitHub Copilot stands as a testament to the transformative potential of AI in software development. By seamlessly integrating AI assistance into the coding process, Copilot empowers developers, accelerates workflows, and opens new horizons for innovation. As the development community embraces this groundbreaking tool, GitHub Copilot is undeniably shaping the future of code creation.
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
