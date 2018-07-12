import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import RadioInput from './RadioInput';
import RadioGroup from './RadioGroup';
import * as FieldsActions from '../../actions/fieldsActions.js';
import * as FormActions from '../../actions/formsActions.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';

const BasicFormHOC = (Component) => {
  class BasicForm extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        fields: Object.assign({}, this.props.fields),
        saving: false
      };

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
      fields[field].value = event.target.value;

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

      this.setState({saving: true});
      this.props.actions.saveFields(fields)
      .then(() => {
        this.setState({saving: false});
        toastr.success('form saved successfully!');
      })
      .catch((error) => {
        toastr.error(error);
      });
    }

    render() {
      return (
        <Component
          id={this.props.id}
          fields={this.state.fields}
          disabled={this.state.saving}
          setChecked={this.setChecked}
          onChange={this.updateFieldState}
          onSave={this.saveForm}
        />
      );
    }
  }

  BasicForm.propTypes = {
    id: PropTypes.string.isRequired,
    fields : PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  function reduceFieldsFromState(fieldsArray) {
    const fields = fieldsArray.reduce((obj, item) => {
      obj[item.id] = {...item};
      return obj;
    }, {});

    return fields;
  }

  function mapStateToProps(state, ownProps) {
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

  return connect(mapStateToProps, mapDispatchToProps)(BasicForm);
};

export default BasicFormHOC;
