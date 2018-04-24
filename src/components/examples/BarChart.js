import React from 'react';
import render from 'react-dom';
import * as d3 from "d3";
import "d3-selection-multi";
import Examples from "./Examples";

class BarChart extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    const { canvas } = this.refs;
    const w = 300;
    const h = 150;
    const padding = 2;
    const dataset = [5, 10, 13, 19, 21, 25, 11, 25, 22, 18, 7];
    const scale = 5;
    const svg = d3.select(canvas)
      .append("svg")
      .attrs({
        width: w,
        height: h
      });
    const colorPicker = (v) => {
      if (v <= 20) {return "#666";}
      else if ( v > 20) {return "#FF0033";}
    };

    svg.selectAll("rect")
    .data(dataset)
      .enter()
      .append("rect")
    .attrs({
      x: function(d, i, n) { return i * (w / dataset.length); },
      y: function(d) { return h - (d * scale); },
      width: w / dataset.length - padding,
      height: function(d) { return (d * scale);},
      fill: function(d) { return colorPicker(d);}
    });

    svg.selectAll("text")
      .data(dataset)
      .enter()
      .append("text")
      .text(function(d){ return d; })
      .attrs({
        "text-anchor": "middle",
        x: function(d,i) {return i * (w / dataset.length) + (w / dataset.length)/2 - padding/2;},
        y: function(d) {return h - (d * scale) - padding;},
        "font-family": "sans-serif"
      });
  }

  render() {

    return (
      <Examples>
        <h1>Bar Chart</h1>
        <div ref="canvas"></div>
      </Examples>
    );
  }
}

export default BarChart;
