import React from 'react';
import render from 'react-dom';
import BasicForm from '../../common/BasicForm';
//import ProductInformation from './ProductInformation';
import ProductInformationForm from './ProductInformationForm';
import AdditionalInformation from './AdditionalInformation';

const ProductMarket = () => {
  const ProductInformation = BasicForm(ProductInformationForm);

  return(
    <div className="segment">
      <ProductInformation id="productInformation"/>
      <AdditionalInformation id="additionalInformation"/>
    </div>
  );
};

export default ProductMarket;
