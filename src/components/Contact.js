import React from 'react';
import { useSelector } from "react-redux";

const Contact = () => {

  const darkMode = useSelector((store) => store.darkMode)

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="min-h-screen dark:bg-c2">
        <div className="flex justify-center pt-20 ">
          <div className="bg-white p-8 rounded-md shadow-lg w-[450px] dark:bg-c4">
            <h2 className="text-3xl font-bold mb-6 text-center dark:text-c3">Get in touch</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-xl font-bold mb-2  dark:text-c3" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="shadow appearance-none border  text-xl rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-transparent dark:text-gray-400 "
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-xl font-bold mb-2  dark:text-c3" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="shadow appearance-none border rounded text-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-transparent dark:text-gray-400"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-xl font-bold mb-2  dark:text-c3" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  className="shadow appearance-none border text-xl rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-transparent dark:text-gray-400"
                  rows="4"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-700 text-white  text-xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  dark:text-gray-300 dark:bg-customBlue2 dark:hover:bg-c3 dark:hover:text-black"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
