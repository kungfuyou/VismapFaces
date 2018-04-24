const initialState = {
  "graph": {
    "background": "#fff",
    "title": "Graph Title",
    "xLabel": "X Label",
    "yLabel": "Y Label"
  },

  "keys": [
    {
      "key": "color",
      "title": "Sales Choice",
      "items": [
        {
          "id": "01",
          "name": "green",
          "value": "#00FF00",
          "title": "Expand"
        },
        {
          "id": "02",
          "name": "orange",
          "value": "#FF9900",
          "title": "Hold"
        },
        {
          "id": "03",
          "name": "red",
          "value": "#FF0000",
          "title": "Divest"
        }
      ]
    },
    {
      "key": "shape",
      "title": "Market Sector",
      "items": [
        {
          "name": "square",
          "title": "Square Title"
        },
        {
          "name": "circle",
          "title": "Circle Title"
        },
        {
          "name": "triangle",
          "title": "Triangle Title"
        },
        {
          "name": "lozenge",
          "title": "Lozenge Title"
        },
        {
          "name": "trapezium",
          "title": "Trapezium Title"
        },
        {
          "name": "kite",
          "title": "Kite Title"
        }
      ]
    },
    {
      "key": "mouth",
      "title": "Sales Choice",
      "items": [
        {
          "name": "mouth_1",
          "title": "Decreasing"
        },
        {
          "name": "mouth_2",
          "title": "Slightly Decreasing"
        },
        {
          "name": "mouth_3",
          "title": "Flat"
        },
        {
          "name": "mouth_4",
          "title": "Slightly Increasing"
        },
        {
          "name": "mouth_5",
          "title": "Increasing"
        }
      ]
    },
    {
      "key": "eyes",
      "title": "Sales Choice",
      "items": [
        {
          "name": "eyes_1",
          "title": "Poor"
        },
        {
          "name": "eyes_2",
          "title": "Fair"
        },
        {
          "name": "eyes_3",
          "title": "Average"
        },
        {
          "name": "eyes_4",
          "title": "Good"
        },
        {
          "name": "eyes_5",
          "title": "Excellent"
        }
      ]
    }
  ],

  "faces" : [
    {
      "name": "Name",
      "x": 0,
      "y": 0,
      "color": "01",
      "shape": "square",
      "mouth": "mouth_1",
      "eyes": "eyes_1"
    }
  ]
};

export default initialState;
