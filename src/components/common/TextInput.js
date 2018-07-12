import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({id, type="text", name, label, className, placeholder, disabled, value, onChange, message}) => {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        className={className}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange} />
        {message && <div className="message">{message}</div>}
    </div>
  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default TextInput;
