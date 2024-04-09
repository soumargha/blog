import React, { useRef, useState } from 'react';
import soumargha2 from '../assets/soumargha2.jpg';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Blogs from './Blogs';
import Coffee from './Coffee';
import Contact from './Contact';
import Cards from './Cards';
import Navbar from './Navbar';
import Footer from './Footer';

const Body = () => {
  const bodyRef = useRef();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); 

  const handleGetStartedClick = () => {
    bodyRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleKnowMoreClick = () => {
    setLoading(true); 
    setTimeout(() => {
      navigate('/mydescrip');
      setLoading(false); 
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, 1000); 
  };

  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
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
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="flex flex-col lg:flex-row lg:items-center"
          >
            <div className="lg:w-1/2 px-5">
              <motion.img
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1.5 }}
                src={soumargha2}
                className=" rounded-lg"
                alt="Soumargha Blog"
              />
            </div>
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.5 }}
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
                  className="inline-flex justify-center items-center py-2 px-4 text-base font-medium text-center text-white rounded-lg bg-teal-700 hover:bg-teal-800 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-900"
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

      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
          <div className="text-white text-2xl font-bold flex items-center">
            Loading...
            <svg
              className="animate-spin h-8 w-8 ml-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0112 4.472v3.638a4 4 0 00-4 4h3.638a7.963 7.963 0 01-1.637 4.072l-2.001-2zM12 20.528V16h3.637a8.03 8.03 0 01-1.637 4.072l-2.001-2zM19.727 11.758a7.963 7.963 0 011.637 4.072H20v-4.528l-.273.256z"
              ></path>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
