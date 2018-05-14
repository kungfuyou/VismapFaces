import React from 'react';
import render from 'react-dom';
import * as d3 from "d3";
import SvgCircle from '../svg/SvgCircle';


class FacesChartPage extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const circleProps = {
        width: 50,
        height: 50,
        cx: 25,
        cy: 25,
        r: 25,
        fill: 'pink'
    };

    return (
        <section className="facesChart">
          <h1>Faces Chart Page</h1>
          <SvgCircle {...circleProps}/>
          <h2>D3 Canvas</h2>
          <div ref="canvas"></div>
        </section>

    );
  }
}

export default FacesChartPage;
