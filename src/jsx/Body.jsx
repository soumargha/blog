/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import soumargha2 from '../assets/soumargha2.jpg';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import Blogs from './Blogs';
import Coffee from './Coffee';
import Contact from './Contact';
import Cards from './Cards';
import Navbar from './Navbar';
import Footer from './Footer';

const Body = () => {
  const bodyRef = useRef();
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    bodyRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleKnowMoreClick = () => {
    navigate('/mydescrip');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ x: -200, opacity: 0 }} // Initial position and opacity
        animate={{ x: 0, opacity: 1 }} // Animation when component is mounted
        transition={{ delay: 0.5, duration: 1.5 }} // Animation transition
        className="container my-24 mx-auto md:px-12 bg-cover bg-center py-8"
        style={{
          backgroundImage: `url(https://w0.peakpx.com/wallpaper/148/727/HD-wallpaper-moon-space-black-stars.jpg)`,
          backgroundSize: 'cover',
        }}
      >
        <section className="mb-32 text-center bg-opacity-75">
          <div className="px-16 py-20 md:px-20 ">
            <h2 className="my-12 text-5xl font-bold tracking-tight  text-white">
              Hi, <br />
              <span className="text-primary dark:text-primary-400">Welcome to my personal blog</span>
            </h2>

            <button
              type="button"
              onClick={handleGetStartedClick}
              className="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Get started
            </button>
          </div>
        </section>
      </motion.div>

      <section id="about" ref={bodyRef} className=" bg-black mt-10">
        <div className="py-8 mt-[-8rem] px-9 mx-auto max-w-screen-xl text-center lg:py-16">
          <motion.div
            initial={{ x: -200, opacity: 0 }} // Initial position and opacity
            animate={{ x: 0, opacity: 1 }} // Animation when component is mounted
            transition={{ delay: 0.5, duration: 1.5 }} // Animation transition
            className="flex flex-col lg:flex-row lg:items-center"
          >
            <div className="lg:w-1/2 px-5">
              <motion.img
                initial={{ x: -200, opacity: 0 }} // Initial position and opacity
                animate={{ x: 0, opacity: 1 }} // Animation when component is mounted
                transition={{ delay: 0.5, duration: 1.5 }} // Animation transition
                src={soumargha2}
                className=" rounded-lg"
                alt="Soumargha Blog"
              />
            </div>
            <motion.div
              initial={{ x: -200, opacity: 0 }} // Initial position and opacity
              animate={{ x: 0, opacity: 1 }} // Animation when component is mounted
              transition={{ delay: 0.5, duration: 1.5 }} // Animation transition
              className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-12"
            >
              <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none  md:text-4xl lg:text-5xl text-white">
                Hi, I am SOUMARGHA BHATTACHARJEE
              </h1>
              <p className="mb-4 text-base font-normal text-gray-300 lg:text-lg sm:px-8 lg:px-24 ">
                <p>
                  Full stack developer and a data analyst currently studying at National Institute of Technology,
                  Agartala. I love playing cricket and making some cool background music 😊. Click on know more to
                  connect with me.
                </p>
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                <button
                  onClick={handleKnowMoreClick}
                  className="inline-flex justify-center items-center py-2 px-4 text-base font-medium text-center text-white rounded-lg bg-purple-700 hover:bg-purple-800 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-900"
                >
                  Know more
                  <svg
                    className="w-3.5 h-3.5 ms-1 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Blogs />
      <Cards />
      <Contact />
      <Coffee />
      <Footer />
    </div>
  );
};

export default Body;
