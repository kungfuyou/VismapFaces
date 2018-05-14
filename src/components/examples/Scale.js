import React from 'react';
import render from 'react-dom';
import * as d3 from "d3";
import "d3-selection-multi";
import "d3-scale";
import Examples from "./Examples";


class ScatterPlot extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    const { canvas } = this.refs;

    const scale = d3.scaleLinear()
      .domain([130,350])
      .range([10,100]);

      const output = `
        <p>scale(350) = ${scale(350)}
        <p>scale(300) = ${scale(300)}
        <p>scale(270) = ${scale(270)}
        <p>scale(130) = ${scale(130)}
        <p>scale(50) = ${scale(50)}
      `;

      canvas.innerHTML = output;

  }

  render() {
    return (
      <div>
        <h1>Scale</h1>
        <div ref="canvas"></div>
      </div>
    );
  }
}

export default ScatterPlot;
