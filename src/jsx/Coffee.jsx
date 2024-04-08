import React, { useState, useEffect } from 'react';
import consulting from '../assets/consulting.png';

const Coffee = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) { // Adjust this value to change when the button appears
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', toggleVisibility);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleDrawerHide = () => {
    setIsDrawerOpen(false);
  };

  const redirectToContactPage = () => {
    window.location.href = 'https://portfoliosbres.netlify.app/';
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div id='coffee' className="bg-black border border-black rounded-lg p-8 md:p-0 mb-32 mt-10 ml-16 mr-16 text-center">
      <a href="#" className=" text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md bg-black dark:text-blue-400 mb-2">
        <img
          src={consulting}
          className="w-32 rounded-lg mx-auto"
          alt="Avatar"
        />
      </a>
      <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-2">If you like my work</h1>
      <p className="mb-4 text-base font-normal  lg:text-lg sm:px-8 lg:px-24 text-gray-400">
        please check out my
      </p>
      <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6"></p>

      <button
        className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-teal-600 dark:hover:bg-teal-600 focus:outline-none dark:focus:ring-teal-600"
        type="button"
        onClick={() => {
          redirectToContactPage();
          handleDrawerHide(); // Assuming you want to hide the drawer after redirecting
        }}
      >
        Portfolio
      </button>

      <div
        id="drawer-contact"
        className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
          isDrawerOpen ? '' : '-translate-x-full'
        } bg-white w-80 dark:bg-gray-800`}
        tabIndex="-1"
        aria-labelledby="drawer-contact-label"
      >
      </div>

      {/* Back-to-top button */}
      {isVisible && (
        <button
          id="to-top-button"
          onClick={goToTop}
          title="Go To Top"
          className="fixed z-50 bottom-10 right-10 p-4 border-0 w-14 h-14 rounded-full shadow-md bg-teal-600 hover:bg-teal-700 text-white text-lg font-semibold transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M12 4l8 8h-6v8h-4v-8H4l8-8z" />
          </svg>
          <span className="sr-only">Go to top</span>
        </button>
      )}
    </div>
  );
};

export default Coffee;
