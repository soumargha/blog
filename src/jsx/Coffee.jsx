/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import consulting from '../assets/consulting.png';

const Coffee = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleDrawerHide = () => {
    setIsDrawerOpen(false);
  };

  const redirectToContactPage = () => {
    window.location.href = 'https://portfoliosoumargha.netlify.app';
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
        className="text-white bg-purple-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-600 focus:outline-none dark:focus:ring-purple-600"
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
    </div>
  );
};

export default Coffee;
