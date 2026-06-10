import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import data from '../data/publications';

const categories = ['Conference', 'Journal', 'Poster', 'Preprint'];
const SELF_NAME = 'Shouzhi Fang';

const formatAuthors = (authors) => {
  if (!authors.includes(SELF_NAME)) {
    return authors;
  }

  const parts = authors.split(SELF_NAME);
  return parts.reduce((acc, part, index) => {
    if (part) {
      acc.push(part);
    }
    if (index < parts.length - 1) {
      acc.push(
        <span key={`self-${index}`} className="pub-author-self">
          {SELF_NAME}
        </span>,
      );
    }
    return acc;
  }, []);
};

const Publications = () => {
  const grouped = categories
    .map((cat) => ({ category: cat, items: data.filter((p) => p.category === cat) }))
    .filter((g) => g.items.length > 0);

  return (
    <Main
      title="Publications"
      description="Shouzhi Fang's publications."
    >
      <article className="post" id="publications">
        <header>
          <div className="title">
            <h2><Link to="/publications">Publications</Link></h2>
            <p className="page-subtitle">Conference papers, journals, posters, and preprints</p>
          </div>
        </header>
        <p className="page-lead">
          A selection of my research publications. Author name
          {' '}
          <span className="pub-author-self">Shouzhi Fang</span>
          {' '}
          is underlined.
        </p>

        <div className="publications-list">
          {grouped.map(({ category, items }) => (
            <section key={category} className="publications-section">
              <h3 className="publications-category">{`${category}s`}</h3>
              <ol className="publications-items">
                {items.map((pub) => (
                  <li key={pub.title} className="publication-entry">
                    <span className="pub-title">
                      {pub.link ? (
                        <a href={pub.link} target="_blank" rel="noopener noreferrer">
                          {pub.title}
                        </a>
                      ) : (
                        pub.title
                      )}
                    </span>
                    <span className="pub-authors">{formatAuthors(pub.authors)}</span>
                    <span className="pub-venue">
                      <em>{pub.venue}</em>, {pub.year}.
                    </span>
                    {pub.pdf && (
                      <a
                        className="pub-link"
                        href={pub.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        [PDF]
                      </a>
                    )}
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
      </article>
    </Main>
  );
};

export default Publications;
