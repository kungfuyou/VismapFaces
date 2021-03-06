import React from 'react';
import PropTypes from 'prop-types';

const RadioInput = ({className, name, id, value, label, checked=false, onChange}) => {
  return (
    <div className={"radio " + className}>
      <label htmlFor={id}>
        <span>{label}</span>
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <div className="radio-proxy"></div>
      </label>
    </div>
  );
};

RadioInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default RadioInput;
