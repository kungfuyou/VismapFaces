import React from 'react';
import render from 'react-dom';

/* Select element:
 * options {Array} : either object {label, value} or string
 */

const Select = ({id, options, selected, changeCallback}) => {

  return (
    <select id={id} value={selected} onChange={(e) => changeCallback(e)}>
      {
        options.map((option, i) =>
            <option key={i} value={option.value || option} >
              {option.label || option}
            </option>
          )
      }
    </select>
  );
};

export default Select;
