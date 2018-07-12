import React from 'react';
import PropTypes from 'prop-types';

const Button = ({name, type="submit", className, value, disabled, onClick, label="Submit"}) => {
  return (
    <button
      name={name}
      type={type}
      className={className}
      value={value}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  label: PropTypes.string
};

export default Button;
