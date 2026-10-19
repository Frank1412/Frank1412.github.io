import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

// Official Google Scholar brand icon, copied from @fortawesome/free-brands-svg-icons
// 6.7.2 (CC BY 4.0); the installed 6.4 release predates it.
const faGoogleScholar = {
  prefix: 'fab',
  iconName: 'google-scholar',
  icon: [512, 512, [], 'e63b', 'M390.9 298.5c0 0 0 .1 .1 .1c9.2 19.4 14.4 41.1 14.4 64C405.3 445.1 338.5 512 256 512s-149.3-66.9-149.3-149.3c0-22.9 5.2-44.6 14.4-64h0c1.7-3.6 3.6-7.2 5.6-10.7c4.4-7.6 9.4-14.7 15-21.3c27.4-32.6 68.5-53.3 114.4-53.3c33.6 0 64.6 11.1 89.6 29.9c9.1 6.9 17.4 14.7 24.8 23.5c5.6 6.6 10.6 13.8 15 21.3c2 3.4 3.8 7 5.5 10.5zm26.4-18.8c-30.1-58.4-91-98.4-161.3-98.4s-131.2 40-161.3 98.4L0 202.7 256 0 512 202.7l-94.7 77.1z'],
};

const data = [
  {
    link: 'https://github.com/frank1412',
    label: 'Github',
    icon: faGithub,
    color: '#181717',
  },
  {
    link: 'https://scholar.google.com/citations?hl=en&user=fl2cBTkAAAAJ',
    label: 'Google Scholar',
    icon: faGoogleScholar,
    color: '#4285F4',
  },
  {
    link: 'https://facebook.com/shouzhi.fang',
    label: 'Facebook',
    icon: faFacebookF,
    color: '#1877F2',
  },
  {
    link: 'https://www.instagram.com/frankid_1412/',
    label: 'Instagram',
    icon: faInstagram,
    color: '#E4405F', // fallback; gradient applied in _intro.scss
  },
  {
    link: 'https://www.linkedin.com/in/shouzhi-fang-2241491a4',
    label: 'LinkedIn',
    icon: faLinkedinIn,
    color: '#0A66C2',
  },
  {
    link: 'https://twitter.com/frank_kid1412',
    label: 'Twitter',
    icon: faTwitter,
    color: '#1DA1F2',
  },
  {
    link: 'mailto:sfang18@syr.edu',
    label: 'Email',
    icon: faEnvelope,
    color: '#F76900', // Syracuse orange
  },
  // {
  //   link: 'mailto:frank.kid1412@gmail.com',
  //   label: 'Email',
  //   icon: faEnvelope,
  // },
];

export default data;
