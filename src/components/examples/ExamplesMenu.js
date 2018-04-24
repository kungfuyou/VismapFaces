import React from 'react';
import { NavLink } from 'react-router-dom';

const ExamplesMenu = () =>
  <nav className="flex">
    <NavLink exact to="/examples/simplebar" activeClassName="active">SimpleBar</NavLink>
    <NavLink to="/examples/barchart" activeClassName="active">Bar Chart</NavLink>
    <NavLink to="/examples/linechart" activeClassName="active">Line Chart</NavLink>
    <NavLink to="/examples/scatterplot" activeClassName="active">Scatter Plot</NavLink>
    <NavLink to="/examples/json1" activeClassName="active">JSON1</NavLink>
    <NavLink to="/examples/json2" activeClassName="active">JSON2</NavLink>
    <NavLink to="/examples/webapi" activeClassName="active">Web Api</NavLink>
    <NavLink to="/examples/scale" activeClassName="active">Scale</NavLink>
    <NavLink to="/examples/scale2" activeClassName="active">Scale2</NavLink>
    <NavLink to="/examples/axis" activeClassName="active">Axis</NavLink>
    <NavLink to="/examples/filter" activeClassName="active">Filter</NavLink>
    <NavLink to="/examples/filter2" activeClassName="active">Filter2</NavLink>

  </nav>;

  export default ExamplesMenu;
