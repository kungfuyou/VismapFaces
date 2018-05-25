import React from 'react';
import PropTypes from 'prop-types';
import MainMenu from './MainMenu';
import LoadingOverlay from './LoadingOverlay';

const PageTemplate = ({children, loading}) => {
  return (
    <div className="page">
      <MainMenu />
      {loading ?
        <LoadingOverlay loading={loading} />
        :
        children}
    </div>
  );
};

PageTemplate.propTypes = {
  children: PropTypes.object,
  loading: PropTypes.bool
};

export default PageTemplate;
