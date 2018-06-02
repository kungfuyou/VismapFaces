const data = {
  fields: {
    productInformation : [
      {
        id: 'product',
        value: 'my product',
        type: 'text',
        elements: 'product',
        label: 'Product/Service'
      },
      {
        id: 'sector',
        value: 'my sector',
        type: 'text',
        elements: 'sector',
        label: 'Market Sector'
      },
      {
        id: 'clarity',
        value: 'good',
        type: 'radio',
        elements: [
          {
            className: "emotive1",
            name: "clarity",
            id: "poor",
            value: "poor",
            label: "Poor"
          },
          {
            className: "emotive2",
            name: "clarity",
            id: "fair",
            value: "fair",
            label: "Fair"
          },
          {
            className: "emotive3",
            name: "clarity",
            id: "average",
            value: "average",
            label: "Average"
          },
          {
            className: "emotive4",
            name: "clarity",
            id: "good",
            value: "good",
            label: "Good"
          },
          {
            className: "emotive5",
            name: "clarity",
            id: "excellent",
            value: "excellent",
            label: "Excellent"
          }
        ],
        label: 'Market Clarity'
      },
      {
        id: 'currentSales',
        value: '0',
        type: 'text',
        elements: 'currentSales',
        label: 'Current Sales (£)'
      },
      {
        id: 'currentMargin',
        value: '0',
        type: 'text',
        elements: 'currentMargin',
        label: 'Current Margin (£)'
      },
      {
        id: 'targetSales',
        value: '1',
        type: 'text',
        elements: 'targetSales',
        label: 'Target Sales (£)'
      },
      {
        id: 'targetMargin',
        value: '1',
        type: 'text',
        elements: 'targetMargin',
        label: 'Target Margin (£)'
      }
    ],
    swot : [
      {
        id: 'something',
        value: 'something value',
        type: 'text',
        elements: 'something'
      },
      {
        id: 'somethigelse',
        value: 'somethingelse value',
        type: 'text',
        elements: 'somethingelse'
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
