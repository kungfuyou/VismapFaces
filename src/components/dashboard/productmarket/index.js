import React from 'react';
import render from 'react-dom';
import BasicForm from '../../common/BasicForm';
import ProductInformation from './ProductInformation';
import ProductInformationForm from './ProductInformationForm';

const ProductMarket = () => {
  const ProductInformation = BasicForm(ProductInformationForm);

  return(
    <div className="segment">
      <ProductInformation id="productInformation"/>
    </div>
  );
};

export default ProductMarket;
