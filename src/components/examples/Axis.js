import React from 'react';
import render from 'react-dom';
import * as d3 from "d3";
import "d3-selection-multi";
import "d3-scale";
import "d3-axis";
import Examples from "./Examples";

class ScatterPlot extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    const { canvas } = this.refs;
    const h = 300;
    const w = 600;
    const padding = 20;
    let ds; //global var for Data
    let salesTotal = 0.00;
    let salesAvg = 0.00;
    let metrics = [];

    const getDate = (d) => {
      const strDate = new String(d);
      const year = strDate.substr(0,4);
      const month = strDate.substr(4,2) - 1; //zero based index
      const day = strDate.substr(6,2);

      return new Date(year, month, day);
    }

    const buildLine = (ds) => {

      const minDate = getDate(ds.monthlySales[0]['month']);
      const maxDate = getDate(ds.monthlySales[ds.monthlySales.length - 1]['month']);

      console.log("min:" , minDate);
      console.log("max:" , maxDate);

      const xScale = d3.scaleTime()
        .domain([
          minDate, maxDate
        ])
        .range([padding, w-padding]);

      const yScale = d3.scaleLinear()
        .domain([
          0,
          d3.max(ds.monthlySales, d => d.sales)
        ])
        .range([h-padding, 10])
        .nice(); // Rounds max to tick increment

      const xAxisGen = d3.axisBottom()
        .tickFormat(d3.timeFormat("%b"))
        .scale(xScale);

      const yAxisGen = d3.axisLeft()
        .scale(yScale);

      const lineFun = d3.line()
        .x(d => xScale(getDate(d.month)))
        .y(d => yScale(d.sales))
        .curve(d3.curveLinear);

      const svg = d3.select(canvas)
        .append("svg")
        .attrs({
          width: w,
          height: h
        });

      const yAxis = svg.append("g")
        .call(yAxisGen)
        .attrs({
          "class": "axis",
          "transform" : `translate(${padding} , 0)`
        });

      const xAxis = svg.append("g")
        .call(xAxisGen)
        .attrs({
          "class": "axis",
          "transform": "translate(0," + (h - padding) + ")"
        })

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
      <div>
        <h1>Axis</h1>
        <div ref="canvas"></div>
      </div>
    );
  }
}

export default ScatterPlot;
