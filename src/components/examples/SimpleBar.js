import React from 'react';
import render from 'react-dom';
import * as d3 from "d3";
import Examples from "./Examples";

class SimpleBar extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    const selection = d3.select("div");

    const { canvas } = this.refs;
    const w = 500;
    const h = 200;
    const padding = 2;
    const dataset = [5, 10, 15, 20, 25, 30];

    const svg = d3.select(canvas)
      .append("svg")
      .attr("width", w)
      .attr("height", h);

    svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
      .attr("x", function(d, i, n) {
        return i * (w / dataset.length);
      })
      .attr("y", function(d){
        return h - (d * 4);
      })
      .attr("width", (w / dataset.length) - padding)
      .attr("height", function(d) {
        return (d * 4);
      });
  }

  render() {

    return (
      <Examples>
        <h1>SimpleBar</h1>
        <div ref="canvas"></div>
      </Examples>
    );
  }
}

export default SimpleBar;
