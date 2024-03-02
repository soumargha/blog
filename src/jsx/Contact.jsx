/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import dummy from '../assets/dev-ed-wave.png';
import towork2 from '../assets/towork2.png'



      const Contact =() => {
        const [userData, setUserData] = useState({
          Name: "",
          Email: "",
          Message: "",
        });

        
      
      const postUserData = (event) => {
        setUserData({
          ...userData,
          [event.target.name]: event.target.value,
        });
      };

      // connect with  firebase

      const submitData = async (event) => {
        event.preventDefault();
        const { Name, Email, Message } = userData;

        if(Name && Email && Message){

       
      
        const res = await fetch('https://personal-blog-sb-default-rtdb.firebaseio.com/userDataRecords.json', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            Name,
            Email,
            Message,
          }),
        });
      
        if (res.ok) {
          setUserData({
            Name: "",
          Email: "",
          Message: "",
          })
          alert('Message Sent');
        } else {
          alert('Failed to send message, please try again');
        }
      }else{
        alert('please fill the data');
      }
      };
      

  return (
     <div className="container mb-38 my-24 mx-auto md:px-6 bg-black">
      <section id='contact' className="mb-32 text-center lg:text-left">
        <div className="mx-auto max-w-[800px] md:px-3">
          <div className="grid items-center lg:grid-cols-2 lg:gap-x-12">
            {/* Image on the left */}
            <div className="mb-12 lg:mb-4 mr-4 px-[-12 rem] relative overflow-hidden transition-all duration-500 ease-in-out transform group">
      <img
        src={towork2}
        className="w-full rounded-lg shadow-lg dark:shadow-black/20 transition-all duration-500 ease-in-out transform scale-100 group-hover:scale-110"
        alt=""
      />
      <img
        src={dummy}
        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-500 ease-in-out transform group-hover:opacity-100 bg-black"
        alt=""
      />
    </div>

         

            {/* Form on the right */}
            <div className="bg-black rounded-lg p-4 mt-2 mb-2 lg:ml-8 lg:mr-[-4rem]">
              <h2 className="mb-12 text-3xl font-bold text-white text-center">Contact Me</h2>
              <form method='POST'>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleInput90"
                    placeholder="Name"
                    name="Name"
                    value={userData.Name}
                    onChange={postUserData}
                  />
                  <label
                    className={`pointer-events-none absolute left-3 top-[-1.2rem] max-w-[90%] origin-0 truncate pt-[0.37rem] leading-[1.6] text-white  duration-200 ease-out ${userData.Name ? 'text-sm' : ''} ${userData.Name ? 'peer-focus:-translate-y-0 peer-focus:scale-100' : ''}`}
                    htmlFor="exampleInput90"
                  >
                    Name
                  </label>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="email"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleInput91"
                    placeholder="Email"
                    name="Email"
                    value={userData.Email}
                    onChange={postUserData}
                  />
                  <label
                    className={`pointer-events-none absolute left-3 top-[-1.2rem] max-w-[90%] origin-0 truncate pt-[0.37rem] leading-[1.6] text-white  duration-200 ease-out ${userData.Name ? 'text-sm' : ''} ${userData.Name ? 'peer-focus:-translate-y-0 peer-focus:scale-100' : ''}`}
                    htmlFor="exampleInput90"
                  >
                    Email
                  </label>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <textarea
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Message"
                    name="Message"
                    value={userData.Message}
                    onChange={postUserData}
                  ></textarea>
                  <label
                    className={`pointer-events-none absolute left-3 top-[-1.2rem] max-w-[90%] origin-0 truncate pt-[0.37rem] leading-[1.6] text-white  duration-200 ease-out ${userData.Name ? 'text-sm' : ''} ${userData.Name ? 'peer-focus:-translate-y-0 peer-focus:scale-100' : ''}`}
                  >
                    Message
                  </label>
                </div>

                <button
                  type="button"
                  onClick={submitData}
                  className="mb-6 inline-block w-full rounded bg-purple-600 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent hover:bg-purple-700 hover:rounded-full"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default Contact;
