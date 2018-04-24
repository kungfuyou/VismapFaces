import React from 'react';
import PropTypes from 'prop-types';

const SvgCircle = ({width, height, ...circleProps}) => {
  return(
    <svg width={width} height={height}>
      <circle {...circleProps} />
    </svg>
  );
};

SvgCircle.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

export default SvgCircle;
