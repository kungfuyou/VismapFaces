import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../common/TextInput';
import RadioInput from '../../common/RadioInput';

class Information extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      information: {
        product: 'my product',
        sector: 'my sector',
        clarity: 'good',
        currentSales: '0',
        currentMargin: '0',
        targetSales: '1',
        targetMargin: '1'
      }
    };

    this.updateFieldState = this.updateFieldState.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps');
  }

  updateFieldState(event) {
    const field = event.target.name;
    let information = Object.assign({}, this.state.information);
    information[field] = event.target.value;
    return this.setState({information: information});
  }

  render() {
    return (
      <form className="product-market-information">
        <TextInput
          name="product"
          label="Product/Service"
          className="focusField"
          placeholder="Enter product or service"
          value={this.state.information.product}
          onChange={this.updateFieldState}
        />

        <TextInput
          name="sector"
          label="Market Sector"
          className="focusField"
          placeholder="Enter market sector"
          value={this.state.information.sector}
          onChange={this.updateFieldState}
        />

        <div className="field">
          <label>Market Clarity</label>

          <div className="radio-group">

            <RadioInput
              className="emotive1"
              name="clarity"
              id="poor"
              value="poor"
              label="Poor"
              checked={this.state.information.clarity === 'poor'}
              onChange={this.updateFieldState}
            />

            <RadioInput
              className="emotive2"
              name="clarity"
              id="fair"
              value="fair"
              label="Fair"
              checked={this.state.information.clarity === 'fair'}
              onChange={this.updateFieldState}
            />

            <RadioInput
              className="emotive3"
              name="clarity"
              id="average"
              value="average"
              label="Average"
              checked={this.state.information.clarity === 'average'}
              onChange={this.updateFieldState}
            />

            <RadioInput
              className="emotive4"
              name="clarity"
              id="good"
              value="good"
              label="Good"
              checked={this.state.information.clarity === 'good'}
              onChange={this.updateFieldState}
            />

            <RadioInput
              className="emotive5"
              name="clarity"
              id="excellent"
              value="excellent"
              label="Excellent"
              checked={this.state.information.clarity === 'excellent'}
              onChange={this.updateFieldState}
            />

          </div>
        </div>

        <TextInput
          name="currentSales"
          label="Current Sales (£)"
          className="focusField"
          placeholder="Enter current sales"
          value={this.state.information.currentSales}
          onChange={this.updateFieldState}
        />

        <TextInput
          name="currentMargin"
          label="Current Margin (%)"
          className="focusField"
          placeholder="Enter current margin"
          value={this.state.information.currentMargin}
          onChange={this.updateFieldState}
        />

        <TextInput
          name="targetSales"
          label="Target Sales (£)"
          className="focusField"
          placeholder="Enter target sales"
          value={this.state.information.targetSales}
          onChange={this.updateFieldState}
        />

        <TextInput
          name="targetMargin"
          label="Target Margin (%)"
          className="focusField"
          placeholder="Enter target margin"
          value={this.state.information.targetMargin}
          onChange={this.updateFieldState}
        />
      </form>
    );
  }
}

Information.propTypes = {};

export default Information;
