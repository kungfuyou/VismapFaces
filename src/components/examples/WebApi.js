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

    const buildLine = (ds) => {
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
          d: lineFun(ds.monthlySales),
          "stroke": "lightblue",
          "stroke-width": 2,
          "fill": "none"
        });
    };

    const showHeader = (ds) => {
      d3.select(canvas).append("h1")
        .text(ds.category + " Sales 2018");
    };

    d3.json('https://api.github.com/repos/bsullins/d3js-resources/contents/monthlySalesbyCategoryMultiple.json', (error, data) => {
      if (error) {
        console.log('error', error);
      } else {
        console.log(data);
         ds = JSON.parse(window.atob(data.content));
        console.log(ds);
      }

      ds.contents.forEach((ds) => {
        showHeader(ds);
        buildLine(ds);
      });
    });
  }

  render() {
    return (
      <Examples>
        <div ref="canvas"></div>
      </Examples>
    );
  }
}

export default ScatterPlot;
