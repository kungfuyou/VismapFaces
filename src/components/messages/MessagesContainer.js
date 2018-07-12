import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {clearMessage} from '../../actions/messagesActions';
import Messages from './messages';

class MessagesContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  messageRow(index, message) {
    return <li key={index} className={message.type}>{message.content}</li>;
  }

  clearMessageCallback(messageKey) {
    return () => this.props.clearMessage(messageKey);
  }

  render() {
    return (
      <Messages messages={this.props.messages} callback={this.props.clearMessage} />
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    messages: state.messages
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clearMessage: messageKey => dispatch(clearMessage(messageKey))
  };
}

MessagesContainer.propTypes = {
  messages: PropTypes.array,
  clearMessage: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesContainer);
