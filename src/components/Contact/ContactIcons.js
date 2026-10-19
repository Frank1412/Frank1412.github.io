import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';

const ContactIcons = () => (
  <>
    {/* Instagram's brand mark is a gradient, which a CSS color cannot express. */}
    <svg width="0" height="0" aria-hidden="true" style={{ position: 'absolute' }}>
      <linearGradient id="instagram-gradient" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0%" stopColor="#FEDA75" />
        <stop offset="25%" stopColor="#FA7E1E" />
        <stop offset="50%" stopColor="#D62976" />
        <stop offset="75%" stopColor="#962FBF" />
        <stop offset="100%" stopColor="#4F5BD5" />
      </linearGradient>
    </svg>
    <ul className="icons">
      {data.map((s) => (
        <li key={s.label}>
          <a href={s.link} title={s.label} aria-label={s.label}>
            <FontAwesomeIcon icon={s.icon} style={{ color: s.color }} />
          </a>
        </li>
      ))}
    </ul>
  </>
);

export default ContactIcons;
