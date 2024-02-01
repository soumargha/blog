/* eslint-disable no-unused-vars */
import React from 'react';
import dummy from '../assets/dev-ed-wave.png';

const Contact = () => {
  return (
    <div className="container my-24 mx-auto md:px-6 bg-black">
      <section className="mb-32 text-center lg:text-left">
        <div className="mx-auto max-w-[800px] md:px-3">
          <div className="grid items-center lg:grid-cols-2 lg:gap-x-12">
            {/* Image on the left */}
            <div className="mb-12 lg:mb-0 ml-[-5rem]">
              <img src={dummy} className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="" />
            </div>

            {/* Form on the right */}
            <div className="bg-black rounded-lg p-4  mt-2 mb-2 ml-8 mr-[-4rem]">
              <h2 className="mb-12 text-3xl font-bold text-white text-center">Contact Me</h2>
              <form>
        <div className="relative mb-6" data-te-input-wrapper-init>
          <input
            type="text"
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleInput90"
            placeholder="Name" />
          <label
            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            htmlFor="exampleInput90"
            >Name
          </label>
        </div>
        <div className="relative mb-6" data-te-input-wrapper-init>
          <input
            type="email"
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleInput91"
            placeholder="Email address" />
          <label
            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            htmlFor="exampleInput91"
            >Email address
          </label>
        </div>
        <div className="relative mb-6" data-te-input-wrapper-init>
          <textarea
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Your message"></textarea>
          <label
            htmlFor="exampleFormControlTextarea1"
            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >Message</label
          >
        </div>
        
        <button
  type="button"
  className="mb-6 inline-block w-full rounded bg-blue-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent hover:bg-blue-700 hover:rounded-full"
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
