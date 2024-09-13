/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import devops from '../assets/DevOps.png'

const Blog7 = () => {
    return (
        <div>
          <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-black antialiased">
            <div className="px-4 mx-auto max-w-screen-xl">
              {/* Image on top for mobile view */}
              <figure className="mb-8 lg:hidden text-center">
                <img 
                  src={devops} 
                  alt="DevOps Illustration" 
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
                          alt="Soumargha Bhattacharjee" 
                        />
                        <div>
                          <span className="text-xl font-bold text-white">Soumargha Bhattacharjee</span>
                          <p className="text-base text-gray-400">Full Stack Developer</p>
                        </div>
                      </div>
                    </address>
                    <h1 id="blog1" className="mb-4 text-3xl font-extrabold leading-tight lg:mb-6 lg:text-4xl text-white">
                      The DevOps Revolution
                    </h1>
                  </header>
                  
                  <section className="text-lg leading-relaxed text-gray-300 mb-6">
                    <p>
                      In the realm of software development and IT operations, there's a transformative approach that's reshaping the industry: DevOps. This methodology represents a shift in traditional workflows, emphasizing collaboration, automation, and continuous improvement. But what exactly is DevOps, and how can businesses leverage its principles for success in today's fast-paced digital landscape? Let’s explore the key benefits and strategies behind DevOps.
                    </p>

                    <h2 className="mt-6 mb-4 text-2xl font-bold text-white">Breaking Down Silos</h2>
                    <p>
                      DevOps breaks down the barriers between development, operations, and quality assurance teams, fostering a culture of collaboration. By integrating these functions and promoting cross-functional teams, organizations streamline processes, reduce bottlenecks, and accelerate the delivery of high-quality software products.
                    </p>

                    <h2 className="mt-6 mb-4 text-2xl font-bold text-white">Automation and Efficiency</h2>
                    <p>
                      Automation lies at the heart of DevOps, enabling teams to automate repetitive tasks like code deployment, testing, and infrastructure provisioning. Automation not only eliminates manual errors but also improves efficiency and creates faster feedback loops, allowing teams to address issues earlier in the development cycle.
                    </p>

                    <h2 className="mt-6 mb-4 text-2xl font-bold text-white">Continuous Integration and Continuous Deployment (CI/CD)</h2>
                    <p>
                      CI/CD, a core practice of DevOps, automates build, test, and deployment processes, enabling teams to deliver changes to production quickly, safely, and frequently. This iterative approach allows businesses to respond rapidly to market demands and continuously improve their services.
                    </p>

                    <h2 className="mt-6 mb-4 text-2xl font-bold text-white">Improved Collaboration and Communication</h2>
                    <p>
                      DevOps emphasizes open communication and collaboration among development, operations, and other stakeholders. By promoting transparency, teams can align priorities, share knowledge, and work towards common goals, fostering a culture of continuous learning and innovation.
                    </p>

                    <h2 className="mt-6 mb-4 text-2xl font-bold text-white">Enhanced Stability and Reliability</h2>
                    <p>
                      With practices like automated testing, Infrastructure as Code (IaC), and monitoring, DevOps helps enhance the stability and reliability of systems. This proactive approach enables teams to minimize downtime, improve performance, and deliver a seamless user experience.
                    </p>

                    <h2 className="mt-6 mb-4 text-2xl font-bold text-white">Conclusion</h2>
                    <p>
                      DevOps represents a fundamental shift in the way organizations develop and deliver software. By embracing collaboration, automation, and continuous improvement, businesses can streamline processes, accelerate innovation, and achieve success in today's digital economy. Whether you're a startup or a Fortune 500 company, adopting DevOps practices can unlock new opportunities for growth and efficiency. The DevOps revolution is here—don’t miss out on the rewards it offers.
                    </p>
                  </section>
                </article>
    
                {/* Image on the right for larger screens */}
                <figure className="hidden lg:block ml-8 mt-36 px-9">
                  <img 
                    src={devops} 
                    alt="DevOps Illustration" 
                    className="w-full h-auto rounded-lg shadow-lg shadow-black/20" 
                  />
                  <figcaption></figcaption>
                </figure>
              </div>
            </div>
          </main>
        </div>
    );
}

export default Blog7;
