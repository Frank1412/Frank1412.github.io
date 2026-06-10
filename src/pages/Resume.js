import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const { PUBLIC_URL } = process.env;
const RESUME_PDF = `${PUBLIC_URL}/cv-llt.pdf`;

const Resume = () => (
  <Main
    title="Resume"
    description="Shouzhi Fang's CV. Ph.D. student in Computer Science at Syracuse University."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2><Link to="/resume">Resume</Link></h2>
          <p className="page-subtitle">Curriculum Vitae (PDF)</p>
        </div>
      </header>

      <div className="resume-pdf-toolbar">
        <a
          href={RESUME_PDF}
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          Open in New Tab
        </a>
        <a
          href={RESUME_PDF}
          download="Shouzhi_Fang_CV.pdf"
          className="button"
        >
          Download PDF
        </a>
      </div>

      <div className="resume-pdf-viewer">
        <iframe
          title="Shouzhi Fang CV"
          src={`${RESUME_PDF}#view=FitH`}
          className="resume-pdf-frame"
        />
        <p className="resume-pdf-fallback">
          If the preview does not load,
          {' '}
          <a href={RESUME_PDF} target="_blank" rel="noopener noreferrer">
            open the PDF directly
          </a>
          .
        </p>
      </div>
    </article>
  </Main>
);

export default Resume;
