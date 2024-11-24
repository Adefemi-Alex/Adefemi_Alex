import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className='relative py-10 md:py-0' id='contact'>
      <h2 className='pl-9 text-4xl font-bold text-center text-zinc-100'>Contact Me!</h2>
      <div className="px-9 py-16 md:mt-0 h-full flex flex-col lg:flex-row  justify-center items-center space-x-4">
        <div className="space-y-24 text-center md:text-left px-2 md:px-0">
          <h2 className=' text-xl md:text-4xl font-bold  text-zinc-100 w-[400px] leading-[3rem]'>Send me a message and I'll get back to you.</h2>
          <p className=' text-zinc-50 text-lg'>
            I look forward to hearing from you. <br />
            Don't hesitate to reach out.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="  p-6 rounded-lg shadow-lg">
          <div className="mb-4 space-y-6 justify-evenly ">
           
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder='Full Name'
              className="w-full px-3 py-5 text-sm bg-transparent text-zinc-200 border-2 border-zinc-100 rounded"
            />
         
           
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder='Email'
              className="w-full px-3 py-5 text-sm bg-transparent text-zinc-200 border-2 border-zinc-100 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-zinc-300 mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 bg-zinc-700 text-zinc-200 rounded"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 cursor-pointer text-white py-2 rounded transition"
          >
            Send Message
          </button>
        </form>
      </div>
      <p className='text-center text-zinc-100 text-xl'>Thank you😎</p>
    </section>
  );
};

export default Contact;