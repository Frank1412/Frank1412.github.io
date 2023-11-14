import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/portfolio.jpg`} alt="" />
      </Link>
      <header>
        <h2>Shouzhi&apos;Fang</h2>
        <p><a href="mailto:frank.kid1412@gmail.com">frank dot kid1412 at gmail dot com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Shouzhi, a graduate student, Rutgers Alumni,
        and a Software Engineer at Blackcowtech company.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Shouzhi Fang <Link to="/">https://frank1412.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
