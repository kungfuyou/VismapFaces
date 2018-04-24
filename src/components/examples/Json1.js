import React from 'react';
import render from 'react-dom';
import * as d3 from "d3";
import "d3-selection-multi";
import Examples from "./Examples";


class ScatterPlot extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    const { canvas } = this.refs;
    const h = 100;
    const w = 400;
    let ds; //global var for Data
    let salesTotal = 0.00;
    let salesAvg = 0.00;
    let metrics = [];

    const buildLine = () => {
      const lineFun = d3.line()
        .x(d => (d.month-20130001)/3.25)
        .y(d => h-d.sales)
        .curve(d3.curveLinear);

      const svg = d3.select(canvas)
        .append("svg")
        .attrs({
          width: w,
          height: h
        });

      const viz = svg.append("path")
        .attrs({
          d: lineFun(ds),
          "stroke": "red",
          "stroke-width": 2,
          "fill": "none"
        });
    };

    const showTotals = () => {
      const t = d3.select(canvas).append("table");
      /* Calculate Total */
      for(const index in ds) {
        salesTotal += ds[index]['sales'] * 1; //convert to number
      }
      // Calculate Average
      salesAvg = salesTotal / ds.length;

      //add Metrics to an array
      metrics.push("Sales Total: " + salesTotal);
      metrics.push("Sales Average: " + salesAvg.toFixed(2));

      const tr = t.selectAll("tr")
        .data(metrics)
        .enter()
        .append("tr")
        .append("td")
        .text(d => d);
    };

    d3.json('http://localhost:3001/components/examples/data/sales.json', function(error, data){
      if (error) {
        console.log('error', error);
      } else {
        console.log('data', data);
        ds=data;
      }

      buildLine();
      showTotals();
    });
  }

  render() {
    return (
      <Examples>
        <h1>CSV/JSON Data</h1>
        <div ref="canvas"></div>
      </Examples>
    );
  }
}

export default ScatterPlot;
