/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Blogs = () => {
 
    const navigate = useNavigate();

    const handleDefaultClick = () =>{
      navigate('/allblogs');
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
    const handleReadMoreClick = () => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }

  return (
    <div>
      
{/* Blog1 */}
<section id="blogs" className="bg-white dark:bg-purple-950 mt-12 px-4 py-0 mr-[-1rem]   ">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div className="bg-gray-50 dark:bg-purple-950 border border-gray-200 dark:border-purple-950 rounded-lg p-8 md:p-0 mb-8">
            
            <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2 text-center">Explore all my blogs</h1>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6"></p>
            
        </div>

        
        <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-gray-50 dark:bg-purple-700 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
        <img
              src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/final_keyword_header.width-1200.format-webp.webp"
              alt="Blog1 Image"
              className="mb-4 w-full h-50 object-cover rounded-md"
            />
            
                <h2 className="text-gray-900 dark:text-purple-100 text-3xl font-extrabold mb-2">Start with Flowbite Design System</h2>
                <h1 className="text-lg font-semibold text-gray-500 dark:text-gray-950 focus:font-bold mb-4">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</h1>
                <Link 
                onClick={handleReadMoreClick}
                 to="/Blog1"
                className="text-blue-600 dark:text-black hover:underline font-medium text-lg inline-flex items-center">
       <button
       
       className="text-white bg-purple-950 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-950 dark:hover:bg-purple-900 focus:outline-none dark:focus:ring-purple-900"
       type="button"
       
       data-drawer-target="drawer-contact"
       data-drawer-show="drawer-contact"
       aria-controls="drawer-contact"
       > 
       Read more </button>
        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </Link>
            </div>

        {/* blog2 */}
        <div className="bg-gray-50 dark:bg-purple-700 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
        <img
              src="https://assets-global.website-files.com/649d808ba8385965c74d94e8/649d808ba8385965c74d9d8b_Github%20Copilot.svg"
              alt="Blog1 Image"
              className="mb-4 w-full h-72 object-cover rounded-md"
            />
            
                <h2 className="text-gray-900 dark:text-purple-100 text-3xl font-extrabold mb-2">Start with Flowbite Design System</h2>
                <h1 className="text-lg font-semibold text-gray-500 dark:text-gray-950 focus:font-bold mb-4">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</h1>
                <Link 
                onClick={handleReadMoreClick}
                 to="/Blog2"
                className="text-blue-600 dark:text-black hover:underline font-medium text-lg inline-flex items-center">
       <button
       
       className="text-white bg-purple-950 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-950 dark:hover:bg-purple-900 focus:outline-none dark:focus:ring-purple-900"
       type="button"
       
       data-drawer-target="drawer-contact"
       data-drawer-show="drawer-contact"
       aria-controls="drawer-contact"
       > 
       Read more </button>
        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </Link>
            </div>
            
            {/* blog3 */}
            <div className="bg-gray-50 dark:bg-purple-700 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
            <img
              src="https://th.bing.com/th/id/OIG1.urBEPItsVWpL9mwymmyt?w=1024&h=1024&rs=1&pid=ImgDetMain"
              alt="Blog1 Image"
              className="mb-4 w-full h-72 object-cover rounded-md bg-purple-400"
            />
            
                <h2 className="text-gray-900 dark:text-purple-100 text-3xl font-extrabold mb-2">Start with Flowbite Design System</h2>
                <h1 className="text-lg font-semibold text-gray-500 dark:text-gray-950 focus:font-bold mb-4">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</h1>
                <Link 
                onClick={handleReadMoreClick}
                 to="/Blog3"
                className="text-blue-600 dark:text-black hover:underline font-medium text-lg inline-flex items-center">
       <button
       
       className="text-white bg-purple-950 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-950 dark:hover:bg-purple-900 focus:outline-none dark:focus:ring-purple-900"
       type="button"
       
       data-drawer-target="drawer-contact"
       data-drawer-show="drawer-contact"
       aria-controls="drawer-contact"
       > 
       Read more </button>
        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </Link>
            </div>

           {/* blog4 */}

           <div className="bg-gray-50 dark:bg-purple-700 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
           <img
              src="https://www.91-cdn.com/hub/wp-content/uploads/2023/11/MediaTek-Dimensity-9300-SoC.png"
              alt="Blog1 Image"
              className="mb-4 w-full h-50 object-cover rounded-md"
            />
            
                <h2 className="text-gray-900 dark:text-purple-100 text-3xl font-extrabold mb-2">Start with Flowbite Design System</h2>
                <h1 className="text-lg font-semibold text-gray-500 dark:text-gray-950 focus:font-bold mb-4">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</h1>
                <Link 
                onClick={handleReadMoreClick}
                 to="/Blog4"
                className="text-blue-600 dark:text-black hover:underline font-medium text-lg inline-flex items-center">
       <button
       
       className="text-white bg-purple-950 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-950 dark:hover:bg-purple-900 focus:outline-none dark:focus:ring-purple-900"
       type="button"
       
       data-drawer-target="drawer-contact"
       data-drawer-show="drawer-contact"
       aria-controls="drawer-contact"
       > 
       Read more </button>
        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </Link>
            </div>
        </div>
        
    </div>
    <div className="text-center">
      <button
        onClick={handleDefaultClick}
        type="button"
        className="text-white bg-purple-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-2.5 text-center me-2  dark:bg-purple-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-11"
      >
        More Blogs
      </button>
    </div>
</section>

    </div>
  )
}

export default Blogs
