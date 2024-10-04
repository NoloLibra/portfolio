import React, { useState } from 'react';
import contactImg from '../assets/images/contactImg.png'

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, such as sending the data to a server
    alert('Form submitted!');
    console.log('Form Data:', formData);
    setFormData({
      fullName: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Contact Us</h2>

        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        />

        <button type="submit">Submit</button>
      </form>
      <img src={contactImg} className='contactImg' alt='contact illustration'/>
    </div>
  );
}

export default ContactForm;
