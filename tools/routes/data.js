const data = {
  fields: {
    productInformation : [
      {
        id: 'product',
        value: 'my product',
        type: 'text',
        name: 'product',
        label: 'Product/Service',
        placeholder: 'Enter product or service'
      },
      {
        id: 'sector',
        value: 'my sector',
        type: 'text',
        name: 'sector',
        label: 'Market Sector',
        placeholder: 'Enter market sector'
      },
      {
        id: 'clarity',
        value: 'good',
        type: 'radio',
        name: 'clarity',
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
        name: 'currentSales',
        label: 'Current Sales (£)',
        placeholder: 'Enter current sales'
      },
      {
        id: 'currentMargin',
        value: '0',
        type: 'text',
        name: 'currentMargin',
        label: 'Current Margin (£)',
        placeholder: 'Enter current margin'
      },
      {
        id: 'targetSales',
        value: '1',
        type: 'text',
        name: 'targetSales',
        label: 'Target Sales (£)',
        placeholder: 'Enter target sales'
      },
      {
        id: 'targetMargin',
        value: '1',
        type: 'text',
        name: 'targetMargin',
        label: 'Target Margin (£)',
        placeholder: 'Enter target margin'
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
