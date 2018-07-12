import React from 'react';
import render from 'react-dom';
import Article from '../ui/Article';
import ProductMarket from './productmarket';
import ValueAnalysis from './valueanalysis';
import SalesStrategy from './salesstrategy';
import ValuePosition from './valueposition';
import CompetitiveAdvantage from './competitiveadvantage';
import Swot from './swot';
import LoadingOverlay from '../ui/LoadingOverlay';

class DashBoard extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
        <section className="dashBoard grid">
          <h1>Vismap Dashboard</h1>

          <Article
            className="product-market"
            header="Product-Market Analysis">
            <ProductMarket />
          </Article>

          <Article
            className="value-analysis"
            header="Value Analysis">
            <ValueAnalysis />
          </Article>

          <Article
            className="sales-strategy"
            header="Sales Strategy">
            <SalesStrategy />
          </Article>

          <Article
            className="value-position"
            header="Value Position">
            <ValuePosition />
          </Article>

          <Article
            className="competitive-advantage"
            header="Competitive Advantage">
            <CompetitiveAdvantage />
          </Article>

          <Article
            className="swot"
            header="SWOT">
            <Swot />
          </Article>
        </section>
    );
  }
}

export default DashBoard;
