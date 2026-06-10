import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const quickLinks = [
  {
    to: '/about',
    label: 'About Me',
    desc: 'Background, interests, and story',
  },
  {
    to: '/resume',
    label: 'Resume',
    desc: 'Education, experience, and skills',
  },
  {
    to: '/projects',
    label: 'Projects',
    desc: 'Research and engineering work',
  },
  {
    to: '/publications',
    label: 'Publications',
    desc: 'Papers, posters, and preprints',
  },
];

const Index = () => (
  <Main
    description={"Shouzhi Fang's personal website. Syracuse University EECS department, "
    + 'student of SYNE Lab and Jones Lab.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Welcome 欢迎</Link></h2>
          <p className="page-subtitle">
            Ph.D. student · Software &amp; Hardware Security · Syracuse University
          </p>
        </div>
      </header>

      <div className="home-hero">
        <p className="home-intro">
          Welcome to my website. I research security problems at the intersection of
          {' '}
          <strong>software and hardware</strong>
          , with a focus on memory-centric security and software testing.
          Explore my work below, or feel free to reach out.
        </p>

        <nav className="home-nav" aria-label="Quick links">
          {quickLinks.map(({ to, label, desc }) => (
            <Link key={to} to={to} className="home-nav-card">
              <span className="home-nav-card__label">{label}</span>
              <span className="home-nav-card__desc">{desc}</span>
            </Link>
          ))}
        </nav>
      </div>
    </article>
  </Main>
);

export default Index;
