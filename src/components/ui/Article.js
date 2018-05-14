import React from 'react';
import PropTypes from 'prop-types';

const Article = ({children, className, header}) => {
  return (
    <article className={className}>
      {header ? <h2>{header}</h2>: ''}
      {children}
    </article>
  );
};

Article.propTypes = {
  children: PropTypes.object,
  className: PropTypes.string,
  header: PropTypes.string
};

export default Article;
