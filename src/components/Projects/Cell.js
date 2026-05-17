import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const isExternalHref = (href) => /^https?:\/\//i.test(href);

const Cell = ({ data }) => {
  const imgSrc = `${process.env.PUBLIC_URL}${data.image}`;
  const image = (
    <img src={imgSrc} alt={data.title} loading="lazy" />
  );
  const ext = data.link && isExternalHref(data.link);
  const linkAttrs = ext
    ? { rel: 'noopener noreferrer', target: '_blank' }
    : {};

  return (
    <div className="cell-container">
      <article className="mini-post">
        <header>
          <h3>
            {data.link ? (
              <a href={data.link} {...linkAttrs}>
                {data.title}
              </a>
            ) : (
              data.title
            )}
          </h3>
          {data.subtitle ? (
            <p className="mini-post__subtitle">{data.subtitle}</p>
          ) : null}
          <time className="published" dateTime={data.date}>
            {dayjs(data.date).format('MMMM YYYY')}
          </time>
        </header>
        {data.link ? (
          <a href={data.link} className="image" {...linkAttrs}>
            {image}
          </a>
        ) : (
          <div className="image">{image}</div>
        )}
        <div className="description">
          <p>{data.desc}</p>
        </div>
      </article>
    </div>
  );
};

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
