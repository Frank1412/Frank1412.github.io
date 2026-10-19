import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';

const About = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/about.md')
      .then((res) => {
        fetch(res.default)
          .then((r) => r.text())
          .then(setMarkdown);
      });
  }, []);

  return (
    <Main
      title="About"
      description="Learn about Shouzhi Fang"
    >
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2>About Me</h2>
            <p className="page-subtitle">Researcher · Ph.D. candidate · Software and Hardware Security enthusiast</p>
          </div>
        </header>
        <Markdown>
          {markdown}
        </Markdown>
      </article>
    </Main>
  );
};

export default About;
