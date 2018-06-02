import React from 'react';
import PropTypes from 'prop-types';
import RadioInput from './RadioInput';

const RadioGroup = ({label, radioArray, onChange, checked, disabled }) => {
  return (
    <div className="field">
      <label>{label}</label>
      <div className="radio-group">
        {radioArray.map((item, index) => {
          return (<RadioInput
            key={index}
            {...item}
            checked={checked(item.value)}
            disabled={disabled}
            onChange={onChange}
          />);

        })}
      </div>
    </div>
  );
};

RadioGroup.propTypes = {
  label: PropTypes.string,
  radioArray: PropTypes.array.isRequired,
  checked: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default RadioGroup;
