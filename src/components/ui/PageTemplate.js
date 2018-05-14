import React from 'react';
import PropTypes from 'prop-types';
import MainMenu from './MainMenu';

const PageTemplate = ({children}) => {
  return (
    <div className="page">
      <MainMenu />
      {children}
    </div>
  );
};

PageTemplate.propTypes = {
  children: PropTypes.object
};

export default PageTemplate;
