import React from 'react';
import render from 'react-dom';
import * as d3 from "d3";
import "d3-selection-multi";
import Examples from "./Examples";
import Select from '../common/Select';

class Filter extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      options : [
        {
          label: "All",
          value: "all"
        },
        {
          label: "Min/Max",
          value: "minmax"
        },
        {
          label: "None",
          value: "none"
        }
      ],
      selected: 'minmax'
    };

    this.monthlySales = [
      { "month": 10, "sales": 100 },
      { "month": 20, "sales": 180 },
      { "month": 30, "sales": 250 },
      { "month": 40, "sales": 300 },
      { "month": 50, "sales": 265 },
      { "month": 60, "sales": 225 },
      { "month": 70, "sales": 180 },
      { "month": 80, "sales": 120 },
      { "month": 90, "sales": 145 },
      { "month": 100, "sales": 130 }
    ];

    this.svg;
    this.changeCallback = this.changeCallback.bind(this);
    this.showMinMax = this.showMinMax.bind(this);
  }

  componentDidMount() {
    const { canvas } = this.refs;
    const w = 350;
    const h = 400;

    const monthlySales = this.monthlySales;

    //KPI color
    const salesKPI = function(d) {
      if (d>=250)
        { return "#33CC66"; }
      else if (d<250)
        { return "#666"; }
    };
    // Min and Max Values for Labels

    //create svg
    this.svg = d3.select(canvas)
      .append("svg")
      .attrs({
        width: w,
        height: h
      });
    //add dots
    const dots = this.svg.selectAll("circle")
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
    const labels = this.svg.selectAll("text")
      .data(this.monthlySales)
      .enter()
        .append("text")
        .text((d) => {
          return this.showMinMax(this.monthlySales, 'sales', d.sales, 'minmax');
        })
        .attrs({
          x: function(d){ return (d.month*3) - 30;},
          y: function(d) {return h-d.sales; },
          "font-size": "12px",
          "font-family": "sans-serif",
          "fill": "#666",
          "text-anchor": "start"
        });
  }

  showMinMax(ds, col, val, type) {
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
  }

  componentWillUpdate(nextProps, nextState) {
    this.svg.selectAll("text")
      .data(this.monthlySales)
      .text((d) => {
        return this.showMinMax(this.monthlySales, 'sales', d.sales, nextState.selected);
      });
  }

  changeCallback(e) {
    this.setState({selected: e.target.value});
  }

  render() {
    return (
      <div>
        <h1>Filter</h1>
        <Select id="select-labels"
          options={this.state.options}
          selected={this.state.selected}
          changeCallback={this.changeCallback}
        />
        <div ref="canvas"></div>
      </div>
    );
  }
}

export default Filter;
