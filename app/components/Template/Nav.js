import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src='https://drive.google.com/uc?export=view&id=1_DgSe0JmsL_Hxd6aaEOy-cO0aZgPreDe' alt="" />
        <img src='https://bigmemes.funnyjunk.com/pictures/Pic+of+falcon+9+take+off_c729c2_6653802.jpg' alt="" />
      </Link>
      <header>
        <h2>Dhruv Mahajan</h2>
        <p><a href="mailto:dhruv1754@gmail.com">dhruv1754@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Dhruv. I like designing applications in data and Security.
            I have been working with data analytics and web app development for 2 years. I am a <a href="https://ubc.ca/">UBC ECE</a> 4th year student and a Software Consultant. 
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">&copy; Dhruv Mahajan <Link to="/">dhruv-mahajan.ca</Link>.</p>
    </section>
  </section>
);

export default Nav;
