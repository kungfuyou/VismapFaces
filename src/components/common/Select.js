import React from 'react';
import render from 'react-dom';
import PropTypes from 'prop-types';

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

Select.propTypes = {
  id : PropTypes.int,
  options: PropTypes.arrayOf(PropTypes.object),
  selected: PropTypes.string,
  changeCallback: PropTypes.func
};

export default Select;
