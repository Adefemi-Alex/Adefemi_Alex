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
    <section className='relative' id='contact'>
      <h2 className='pl-9 text-4xl font-bold text-center text-zinc-100'>Contact Me</h2>
      <div className="px-9 py-16 mt-24 md:mt-0 h-full">
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto  p-6 rounded-lg shadow-lg">
          <div className="mb-4 flex justify-evenly space-x-4">
           
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder='Full Name'
              className="w-full p-2 bg-transparent text-zinc-200 border-[1px] border-x-zinc-200 rounded"
            />
         
           
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder='Email'
              className="w-full p-2 bg-transparent text-zinc-200 border-[1px] border-x-zinc-200 rounded"
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
            className="w-full bg-teal-600 text-white py-2 rounded hover:bg-blue-500 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;