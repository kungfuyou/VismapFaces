import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as FieldsActions from '../../../actions/fieldsActions.js';

class AdditionalInformation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textInput: '',
      fields: Object.assign({}, this.props.fields),
      saving: false
    };

    this.updateField = this.updateField.bind(this);
  }

  componentWillMount() {
    //console.log('component will mount');
  }

  componentWillReceiveProps(nextProps) {
    //console.log('component did mount');
    this.setState({fields : Object.assign({}, nextProps.fields)});
  }

  updateField(event) {
    return this.setState({textInput: event.target.value});
  }

  render() {
    return (
      <form id={this.props.id}>
        <div className="fieldlist">
          <input
          type="text"
          id="test"
          name="test"
          value={this.state.textInput}
          onChange={this.updateField}
          />
          <button>+</button>
        </div>
      </form>
    );
  }
}

function reduceFieldsFromState(fieldsArray) {
  const fields = fieldsArray.reduce((obj, item) => {
    obj[item.id] = {...item};
    return obj;
  }, {});

  return fields;
}

function mapStateToProps(state, ownProps) {
  //console.log(state, ownProps);
  const fields = reduceFieldsFromState(state.fields[ownProps.id]);
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(FieldsActions, dispatch)
  };
}

AdditionalInformation.propTypes = {
  id: PropTypes.string.isRequired,
  fields: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalInformation);
