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
        id={fields.product.id}
        name={fields.product.name}
        label={fields.product.label}
        className="focusField"
        placeholder={fields.product.placeholder}
        disabled={disabled}
        value={fields.product.value}
        onChange={onChange}
      />

      <TextInput
        id={fields.sector.id}
        name={fields.sector.name}
        label={fields.sector.label}
        className="focusField"
        placeholder={fields.sector.placeholder}
        disabled={disabled}
        value={fields.sector.value}
        onChange={onChange}
      />

      <RadioGroup
        id={fields.clarity.id}
        name={fields.clarity.name}
        label={fields.clarity.label}
        radioArray={fields.clarity.elements}
        checked={setChecked(fields.clarity.value)}
        disabled={disabled}
        onChange={onChange}
      />

      <TextInput
        id={fields.currentSales.id}
        name={fields.currentSales.name}
        label={fields.currentSales.label}
        className="focusField"
        placeholder={fields.currentSales.placeholder}
        disabled={disabled}
        value={fields.currentSales.value}
        onChange={onChange}
      />

      <TextInput
        id={fields.currentMargin.id}
        name={fields.currentMargin.name}
        label={fields.currentMargin.label}
        className="focusField"
        placeholder={fields.currentMargin.placeholder}
        disabled={disabled}
        value={fields.currentMargin.value}
        onChange={onChange}
      />

      <TextInput
        id={fields.targetSales.id}
        name={fields.targetSales.name}
        label={fields.targetSales.label}
        className="focusField"
        placeholder={fields.targetSales.placeholder}
        disabled={disabled}
        value={fields.targetSales.value}
        onChange={onChange}
      />

      <TextInput
        id={fields.targetMargin.id}
        name={fields.targetMargin.name}
        label={fields.targetMargin.label}
        className="focusField"
        placeholder={fields.targetMargin.placeholder}
        disabled={disabled}
        value={fields.targetMargin.value}
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
