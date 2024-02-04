// About.js

import React from 'react';
import './About.css'; // Import the CSS file

export default function About() {
  return (
    <div className="about-container">
      <header>
        <h1>About Us</h1>
      </header>
      <section className="about-content">
        <p>
          Welcome to our website! We are a team of passionate individuals
          dedicated to [your mission or purpose]. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nulla condimentum purus in neque
          sollicitudin, quis vestibulum felis laoreet. Phasellus id justo et
          nibh feugiat ullamcorper.
        </p>
        <p>
          Our mission is to [briefly describe your mission]. Quisque ultricies
          libero et justo convallis, nec efficitur lacus accumsan. Vestibulum
          nec quam vel ligula volutpat bibendum sit amet sit amet velit.
        </p>
      </section>
      <footer className="about-footer">
        <p>Contact us at: <a href="mailto:info@example.com">info@example.com</a></p>
      </footer>
    </div>
  );
}
