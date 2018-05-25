const data = {
  fields: {
    productInformation : [
      {
        id: 'product',
        value: 'my product'
      },
      {
        id: 'sector',
        value: 'my sector'
      },
      {
        id: 'clarity',
        value: 'good'
      },
      {
        id: 'currentSales',
        value: '0'
      },
      {
        id: 'currentMargin',
        value: '0'
      },
      {
        id: 'targetSales',
        value: '1'
      },
      {
        id: 'targetMargin',
        value: '1'
      }
    ],
    swot : [
      {
        id: 'something',
        value: 'something value'
      },
      {
        id: 'somethigelse',
        value: 'somethingelse value'
      }
    ]
  },
  forms: [
    {
      id: 'productInformation',
      busy: false
    },
    {
      id: 'swot',
      busy: false
    }
  ],
  ajaxCallsInProgress: 0
};


export default data;
