import React from 'react';
import PropTypes from 'prop-types';
import LoadingBars from '../../assets/loading-bars.svg';

const LoadingOverlay = ({loading, message='loading'}) => {
  return (
    loading ?
    <div className="loading">
      <span>
        {message}
        <img src={LoadingBars} />
      </span>
    </div>
    :
    ''
  );
};

LoadingOverlay.propTypes = {
  loading: PropTypes.bool,
  message: PropTypes.string
};

export default LoadingOverlay;
