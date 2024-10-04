import React from 'react'
import { Link } from "react-router-dom";

function ContactSection() {
  return (
    <section className="contactSection">
        <h2>Contact</h2>
        <h1>Let's Chat About <br /> It</h1>
        <button><Link to="/contact">Get In Touch</Link></button>
    </section>
  )
}

export default ContactSection
