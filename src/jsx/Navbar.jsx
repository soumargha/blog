/* eslint-disable no-unused-vars */
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';



const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white border-gray-200 dark:bg-black">
      <nav className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://t4.ftcdn.net/jpg/03/44/12/21/360_F_344122188_vFBTt6gM0qoMBf6iqhsnVccy7F3lyPvj.jpg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Soumargha</span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-black dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
            <ScrollLink
                to="about" // Make sure it matches the id of your blogs section
                spy={true}
                smooth={true}
                offset={-70} // Adjust the offset based on your layout
                duration={500}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About Me
              </ScrollLink>
            </li>
            <li>
            <ScrollLink
                to="blogs" // Make sure it matches the id of your blogs section
                spy={true}
                smooth={true}
                offset={-70} // Adjust the offset based on your layout
                duration={500}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Blogs
              </ScrollLink>
            </li>
            <li>
            <ScrollLink
                to="contact" // Make sure it matches the id of your blogs section
                spy={true}
                smooth={true}
                offset={-70} // Adjust the offset based on your layout
                duration={500}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                contact Me
              </ScrollLink>
            </li>
            <li>
            <ScrollLink
                to="coffee" // Make sure it matches the id of your blogs section
                spy={true}
                smooth={true}
                offset={-70} // Adjust the offset based on your layout
                duration={500}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Cup of Coffee
              </ScrollLink>
            </li>
           
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;