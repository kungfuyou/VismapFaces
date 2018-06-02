import React from 'react';
import PropTypes from 'prop-types';
import render from 'react-dom';
import TextInput from '../../common/TextInput';
import RadioInput from '../../common/RadioInput';
import RadioGroup from '../../common/RadioGroup';

const ProductInformationForm = ({disabled, fields, setChecked, onChange, onSave}) => {
  return(
    <form className="product-market-information">
      <TextInput
        name="product"
        label="Product/Service"
        className="focusField"
        placeholder="Enter product or service"
        disabled={disabled}
        value={fields.product}
        onChange={onChange}
      />

      <TextInput
        name="sector"
        label="Market Sector"
        className="focusField"
        placeholder="Enter market sector"
        disabled={disabled}
        value={fields.sector}
        onChange={onChange}
      />

      <RadioGroup
        label="Market Clarity"
        radioArray={[]}
        checked={setChecked}
        disabled={disabled}
        onChange={onChange}
      />

      <TextInput
        name="currentSales"
        label="Current Sales (£)"
        className="focusField"
        placeholder="Enter current sales"
        disabled={disabled}
        value={fields.currentSales}
        onChange={onChange}
      />

      <TextInput
        name="currentMargin"
        label="Current Margin (%)"
        className="focusField"
        placeholder="Enter current margin"
        disabled={disabled}
        value={fields.currentMargin}
        onChange={onChange}
      />

      <TextInput
        name="targetSales"
        label="Target Sales (£)"
        className="focusField"
        placeholder="Enter target sales"
        disabled={disabled}
        value={fields.targetSales}
        onChange={onChange}
      />

      <TextInput
        name="targetMargin"
        label="Target Margin (%)"
        className="focusField"
        placeholder="Enter target margin"
        disabled={disabled}
        value={fields.targetMargin}
        onChange={onChange}
      />

      <input
        type="submit"
        value="save"
        disabled={disabled}
        onClick={onSave}
        />
    </form>
  );
};

ProductInformationForm.propTypes = {
  disabled: PropTypes.bool.isRequired,
  fields : PropTypes.object.isRequired,
  setChecked: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};

export default ProductInformationForm;
