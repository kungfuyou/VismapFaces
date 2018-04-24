import React from 'react';
import render from 'react-dom';
import * as d3 from "d3";
import "d3-selection-multi";
import Examples from "./Examples";

class LineChart extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    const { canvas } = this.refs;
    const w = 350;
    const h = 400;
    const monthlySales = [
      { "month": 10, "sales": 100 },
      { "month": 20, "sales": 130 },
      { "month": 30, "sales": 250 },
      { "month": 40, "sales": 300 },
      { "month": 50, "sales": 265 },
      { "month": 60, "sales": 225 },
      { "month": 70, "sales": 180 },
      { "month": 80, "sales": 120 },
      { "month": 90, "sales": 145 },
      { "month": 100, "sales": 130 }
    ];
    /* Data returned to create an svg line */
    const lineFun = d3.line()
    .x(function(d) { return d.month * 3; })
    .y(function(d) { return h - d.sales; })
    .curve(d3.curveLinear);

    //console.log(lineFun(monthlySales));

    const svg = d3.select(canvas)
      .append("svg")
      .attrs({
        width: w,
        height: h
      });

    const viz = svg.append("path")
      .attrs({
        d: lineFun(monthlySales),
        "stroke": "purple",
        "stroke-width": 2,
        "fill": "none"
    });

    // add labels
    const labels = svg.selectAll("text")
      .data(monthlySales)
      .enter()
      .append("text")
    .text(function(d){ return d.sales; })
    .attrs({
      x: function(d) {return d.month * 3-25;},
      y: function(d) {return h-d.sales;},
      "font-size": "12px",
      "font-family": "sans-serif",
      "fill": "#666",
      "text-anchor": "start",
      "dy": ".35em",
      "font-weight": function(d,i) {
        if (i===0 || i==(monthlySales.length-1)) {
          return "bold";
        }
      }
    });
  }

  render() {

    return (
      <Examples>
        <h1>Line Chart</h1>
        <div ref="canvas"></div>
      </Examples>
    );
  }
}

export default LineChart;
