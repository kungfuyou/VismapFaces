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
    //KPI color
    const salesKPI = function(d) {
      if (d>=250)
        { return "#33CC66"; }
      else if (d<250)
        { return "#666"; }
    };
    // Min and Max Values for Labels
    const showMinMax = function(ds, col, val, type) {
      const max = d3.max(ds, function(d){
        return d[col];
      });

      const min = d3.min(ds, function(d){
        return d[col];
      });

      if (type == 'minmax' && (val == max || val == min)) {
        return val;
      } else if (type == 'all') {
        return val;
      }
    };
    //create svg
    const svg = d3.select(canvas)
      .append("svg")
      .attrs({
        width: w,
        height: h
      });
    //add dots
    const dots = svg.selectAll("circle")
      .data(monthlySales)
      .enter()
      .append("circle")
      .attrs({
        cx: function(d) { return d.month * 3; },
        cy: function(d) { return h-d.sales; },
        r: 5,
        "fill": function(d) {
          return salesKPI(d.sales);
        }
      });
    //add labels
    const labels = svg.selectAll("text")
      .data(monthlySales)
      .enter()
        .append("text")
        .text(function(d) { return showMinMax(monthlySales, 'sales', d.sales, 'minmax'); })
        .attrs({
          x: function(d){ return (d.month*3) - 30;},
          y: function(d) {return h-d.sales; },
          "font-size": "12px",
          "font-family": "sans-serif",
          "fill": "#666",
          "text-anchor": "start"
        });
  }

  render() {
    return (
      <Examples>
        <h1>Scatter Plot</h1>
        <div ref="canvas"></div>
      </Examples>
    );
  }
}

export default ScatterPlot;
