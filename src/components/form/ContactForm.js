import { useState } from "react";
import React from "react";

const ContactForm = ({ title, handleFormSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
    };
    handleFormSubmit(data);
  };
  return (
    <div>
      <h2 className='main-title text-xl mb-5 mt-5 uppercase'>
        <span className='text-2xl mb-5'>{title}</span>
      </h2>
      <form onSubmit={handleSubmit} className='w-full max-w-lg'>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full  px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='name'
            >
              Όνομα
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='name'
              type='text'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-password'
            >
              E-mail
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='email'
              type='email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-password'
            >
              Μήνυμα
            </label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              className=' no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none'
              id='message'
            ></textarea>
          </div>
        </div>
        <div className='md:flex md:items-center'>
          <div className='md:w-1/3'>
            <button
              className='shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
              type='submit'
            >
              Αποστολή
            </button>
          </div>
          <div className='md:w-2/3'></div>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
