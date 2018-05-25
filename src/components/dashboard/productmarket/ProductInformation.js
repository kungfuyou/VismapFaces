import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../common/TextInput';
import RadioInput from '../../common/RadioInput';
import RadioGroup from '../../common/RadioGroup';
import * as FieldsActions from '../../../actions/fieldsActions.js';
import * as FormActions from '../../../actions/formsActions.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ProductInformation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: Object.assign({}, this.props.fields)
    };

    this.radioArray = [
      {
        className: "emotive1",
        name: "clarity",
        id: "poor",
        value: "poor",
        label: "Poor"
      },
      {
        className: "emotive2",
        name: "clarity",
        id: "fair",
        value: "fair",
        label: "Fair"
      },
      {
        className: "emotive3",
        name: "clarity",
        id: "average",
        value: "average",
        label: "Average"
      },
      {
        className: "emotive4",
        name: "clarity",
        id: "good",
        value: "good",
        label: "Good"
      },
      {
        className: "emotive5",
        name: "clarity",
        id: "excellent",
        value: "excellent",
        label: "Excellent"
      }
    ];

    this.updateFieldState = this.updateFieldState.bind(this);
    this.setChecked = this.setChecked.bind(this);
    this.saveForm = this.saveForm.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({fields : Object.assign({}, nextProps.fields)});
  }

  updateFieldState(event) {
    const field = event.target.name;
    let fields = Object.assign({}, this.state.fields);

    fields[field] = event.target.value;
    return this.setState({fields: fields});
  }

  setChecked(state) {
    return (value) => {
        return state === value;
    };
  }

  saveForm(event) {
    event.preventDefault();
    const fields = {
      [this.props.id] : this.state.fields
    };
  
    this.props.actions.saveFields(fields);
  }

  render() {
    return (
      <form className="product-market-information">
        <TextInput
          name="product"
          label="Product/Service"
          className="focusField"
          placeholder="Enter product or service"
          value={this.state.fields.product}
          onChange={this.updateFieldState}
        />

        <TextInput
          name="sector"
          label="Market Sector"
          className="focusField"
          placeholder="Enter market sector"
          value={this.state.fields.sector}
          onChange={this.updateFieldState}
        />

        <RadioGroup
          label="Market Clarity"
          radioArray={this.radioArray}
          checked={this.setChecked(this.state.fields.clarity)}
          onChange={this.updateFieldState}
        />

        <TextInput
          name="currentSales"
          label="Current Sales (£)"
          className="focusField"
          placeholder="Enter current sales"
          value={this.state.fields.currentSales}
          onChange={this.updateFieldState}
        />

        <TextInput
          name="currentMargin"
          label="Current Margin (%)"
          className="focusField"
          placeholder="Enter current margin"
          value={this.state.fields.currentMargin}
          onChange={this.updateFieldState}
        />

        <TextInput
          name="targetSales"
          label="Target Sales (£)"
          className="focusField"
          placeholder="Enter target sales"
          value={this.state.fields.targetSales}
          onChange={this.updateFieldState}
        />

        <TextInput
          name="targetMargin"
          label="Target Margin (%)"
          className="focusField"
          placeholder="Enter target margin"
          value={this.state.fields.targetMargin}
          onChange={this.updateFieldState}
        />

        <input
          type="submit"
          value="Submit"
          onClick={this.saveForm}
          />
      </form>
    );
  }
}

/* Used by all form components */
function reduceFieldsFromState(fieldsArray) {
  const fields = fieldsArray.reduce((obj, item) => {
    obj[item.id] = item.value;
    return obj;
  }, {});
  console.log(fields);
  return fields;
}

function mapStateToProps(state, ownProps) {
  console.log('state', state);
  const fields = reduceFieldsFromState(state.fields[ownProps.id]);

  return {
    id: ownProps.id,
    fields: fields
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(FieldsActions, dispatch)
  };
}

ProductInformation.propTypes = {
  id: PropTypes.string.isRequired,
  fields : PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductInformation);
