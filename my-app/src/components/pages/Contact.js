// Contact.js

import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <header>
        <h1>Contact Us</h1>
      </header>
      <section className="contact-content">
        <p>
          Have questions or feedback? We'd love to hear from you! Reach out to
          us using the form below or email us directly.
        </p>
        <form>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>
      <footer className="contact-footer">
        <p>Email us at: <a href="mailto:info@example.com">info@example.com</a></p>
      </footer>
    </div>
  );
}
