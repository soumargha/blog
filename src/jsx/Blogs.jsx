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
<section id="blogs" className=" bg-purple-950 mt-12 px-4 py-0 mr-[-1rem]   ">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div className=" bg-purple-950 border  border-purple-950 rounded-lg p-8 md:p-0 mb-8">
            
            <h1 className=" text-white text-3xl md:text-5xl font-extrabold mb-2 text-center">Explore all my blogs</h1>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6"></p>
            
        </div>

        
        <div className="grid md:grid-cols-2 gap-8">

        <div className=" bg-purple-700 border  dark:border-gray-700 rounded-lg p-8 md:p-12">
        <img
              src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/final_keyword_header.width-1200.format-webp.webp"
              alt="Blog1 Image"
              className="mb-4 w-full h-50 object-cover rounded-md"
            />
            
                <h2 className=" text-purple-100 text-3xl font-extrabold mb-2">Unveiling Gemini AI:</h2>
                <h1 className="text-lg font-semibold text-gray-500 dark:text-gray-950 focus:font-bold mb-4">Artificial Intelligence (AI) has been a transformative force, pushing the boundaries of what we once deemed possible. In this fast-evolving landscape, a new player has emerged, making waves and capturing the attention of tech enthusiasts and industry experts alike – Gemini AI.</h1>
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
        <div className="bg-purple-700 border  border-gray-700 rounded-lg p-8 md:p-12">
        <img
              src="https://assets-global.website-files.com/649d808ba8385965c74d94e8/649d808ba8385965c74d9d8b_Github%20Copilot.svg"
              alt="Blog1 Image"
              className="mb-4 w-full h-72 object-cover rounded-md"
            />
            
                <h2 className="text-gray-900 dark:text-purple-100 text-3xl font-extrabold mb-2">GitHub Copilot:</h2>
                <h1 className="text-lg font-semibold text-gray-500 dark:text-gray-950 focus:font-bold mb-4">GitHub Copilot, a groundbreaking tool by GitHub and OpenAI, revolutionizes code creation. This AI-powered assistant, accelerates software development by providing real-time code suggestions, transforming the coding experience for developers worldwide.</h1>
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
            <div className="bg-gray-50 dark:bg-purple-700 border  dark:border-gray-700 rounded-lg p-8 md:p-12">
            <img
              src="https://th.bing.com/th/id/OIG1.urBEPItsVWpL9mwymmyt?w=1024&h=1024&rs=1&pid=ImgDetMain"
              alt="Blog1 Image"
              className="mb-4 w-full h-72 object-cover rounded-md bg-purple-400"
            />
            
                <h2 className="text-gray-900 dark:text-purple-100 text-3xl font-extrabold mb-2">Unveiling the Power of Data Analytics:</h2>
                <h1 className="text-lg font-semibold text-gray-500 dark:text-gray-950 focus:font-bold mb-4">In todays data-driven world, the significance of data analytics cannot be overstated. As businesses and industries harness the power of data to make informed decisions, data analytics emerges as a critical tool. Lets embark on a journey to explore the intricacies, applications, and transformative potential of data analytics.</h1>
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

           <div className="bg-gray-50 dark:bg-purple-700 border  dark:border-gray-700 rounded-lg p-8 md:p-12">
           <img
              src="https://www.91-cdn.com/hub/wp-content/uploads/2023/11/MediaTek-Dimensity-9300-SoC.png"
              alt="Blog1 Image"
              className="mb-4 w-full h-50 object-cover rounded-md"
            />
            
                <h2 className="text-gray-900 dark:text-purple-100 text-3xl font-extrabold mb-2">Exploring the MediaTek Dimensity 9300 Chip</h2>
                <h1 className="text-lg font-semibold text-gray-500 dark:text-gray-950 focus:font-bold mb-4">In the dynamic realm of mobile technology, the MediaTek Dimensity 9300 chip has emerged as a powerhouse, setting new standards for performance, connectivity, and efficiency. Lets embark on a journey to unravel the intricacies of this cutting-edge chip and understand how it is shaping the future of mobile devices.</h1>
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
