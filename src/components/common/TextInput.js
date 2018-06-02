import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({id, name, label, className, placeholder, disabled, value, onChange}) => {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <input
        id={id}
        type="text"
        name={name}
        className={className}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange} />
    </div>
  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default TextInput;
