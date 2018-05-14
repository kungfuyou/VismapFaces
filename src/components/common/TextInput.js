import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({name, label, className, placeholder, value, onChange}) => {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange} />
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextInput;
