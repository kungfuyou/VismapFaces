import React from 'react';
import render from 'react-dom';
import * as d3 from "d3";
import "d3-selection-multi";
import "d3-scale";
import "d3-axis";
import Examples from "./Examples";
import Select from '../common/Select';

class Filter2 extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      options : [
        {
          label: "Last Year",
          value: "12"
        },
        {
          label: "Last 6/mo",
          value: "6"
        },
        {
          label: "Last Quarter",
          value: "3"
        }
      ],
      selected: '12',
      w: 600,
      h: 300,
      padding: 20,
      data: []
    };

    this.changeCallback = this.changeCallback.bind(this);
  }

  componentDidMount() {
    const { canvas } = this.refs;
    const {w, h, padding} = this.state;
    let ds; //global var for Data
    let salesTotal = 0.00;
    let salesAvg = 0.00;
    let metrics = [];

    const buildLine = (ds) => {

      const minDate = this.getDate(ds.monthlySales[0]['month']);
      const maxDate = this.getDate(ds.monthlySales[ds.monthlySales.length - 1]['month']);

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
        .x(d => xScale(this.getDate(d.month)))
        .y(d => yScale(d.sales))
        .curve(d3.curveLinear);

      const svg = d3.select(canvas)
        .append("svg")
        .attrs({
          width: w,
          height: h,
          "id": "svg-" + ds.category
        });

      const yAxis = svg.append("g")
        .call(yAxisGen)
        .attrs({
          "class": "y-axis",
          "transform" : `translate(${padding} , 0)`
        });

      const xAxis = svg.append("g")
        .call(xAxisGen)
        .attrs({
          "class": "x-axis",
          "transform": "translate(0," + (h - padding) + ")"
        });

      const viz = svg.append("path")
        .attrs({
          d: lineFun(ds.monthlySales),
          "stroke": "lightblue",
          "stroke-width": 2,
          "fill": "none",
          "class": "path-" + ds.category
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
         ds = JSON.parse(window.atob(data.content));
         this.setState({data: ds});
      }

      this.state.data.contents.forEach((ds) => {
        showHeader(ds);
        buildLine(ds);
      });
    });
  }

  componentWillUpdate(nextProps, nextState) {
    const { canvas } = this.refs;
    const {w, h, padding} = this.state;

    const updateLine = (ds) => {
      const minDate = this.getDate(ds.monthlySales[0]['month']);
      const maxDate = this.getDate(ds.monthlySales[ds.monthlySales.length - 1]['month']);

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
        .scale(xScale)
        .ticks(ds.monthlySales.length -1)

      const yAxisGen = d3.axisLeft()
        .scale(yScale);

      const lineFun = d3.line()
        .x(d => xScale(this.getDate(d.month)))
        .y(d => yScale(d.sales))
        .curve(d3.curveLinear);

      const svg = d3.select(canvas)
        .select("#svg-" + ds.category);

      const yAxis = svg.selectAll("g.y-axis")
        .transition()
        .duration(500)
        .ease(d3.easeCircle)
        .call(yAxisGen);

      const xAxis = svg.selectAll("g.x-axis")
        .transition()
        .duration(500)
        .ease(d3.easeCircle)
        .call(xAxisGen)

      const viz = svg.selectAll(".path-"+ ds.category)
        .transition()
        .duration(1000)
        .ease(d3.easeCircle)
        .attrs({
          d: lineFun(ds.monthlySales)
        });
    };

    if(this.state.selected !== nextState.selected) {
      const sel = nextState.selected;
      const contents = this.state.data.contents;

      /* Needed to deep copy */
      const copy = (o) => {
         let output, v, key;
         output = Array.isArray(o) ? [] : {};
         for (key in o) {
             v = o[key];
             output[key] = (typeof v === "object") ? copy(v) : v;
         }
         return output;
      };

      contents.forEach((ds) => {
        const deepCopy = copy(ds);
        deepCopy.monthlySales.splice(0, deepCopy.monthlySales.length-sel);
        updateLine(deepCopy);
      });
    }
  }

  getDate(d) {
    const strDate = new String(d);
    const year = strDate.substr(0,4);
    const month = strDate.substr(4,2) - 1; //zero based index
    const day = strDate.substr(6,2);

    return new Date(year, month, day);
  }

  changeCallback(e) {
    this.setState({selected: e.target.value});
  }

  render() {
    return (
      <Examples>
        <Select id="date-option"
          options={this.state.options}
          selected={this.state.selected}
          changeCallback={this.changeCallback}
        />
        <div ref="canvas"></div>
      </Examples>
    );
  }
}

export default Filter2;
