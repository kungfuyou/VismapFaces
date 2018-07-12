import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

class Expire extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };
  }

  componentDidMount() {
    this.setTimer();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.children !== this.props.children) {
      this.setState({visible: true});
    }
  }

  componentDidUpdate() {
    this.setTimer();
  }

  componentWillUnmount() {
    clearTimeout(this._timer);
  }

  setTimer() {
    this._timer != null ? clearTimeout(this._timer) : null;

    this._delay = this.state.visible
    ? this.props.delay
    : this.props.fadeDelay;

    this._timer = setTimeout(function(){
      this._timer = null;

      if(this.state.visible == true) {
        this.setState({visible: false});
        this.setTimer();
      } else {
        this.props.callback();
      }
    }.bind(this), this._delay);
  }

  render() {
    console.log(this.props.children);
    const style = this.state.visible
    ? {opacity: 0.95}
    : {opacity: 0, transition: 'opacity 0.3s'};

    return (
      React.cloneElement(this.props.children, {style: style})
    );
  }
}

Expire.propTypes = {
  delay: PropTypes.number,
  fadeDelay: PropTypes.number,
  children: PropTypes.object,
  className: PropTypes.string,
  callback: PropTypes.func
};

Expire.defaultProps = {
  delay: 5000,
  fadeDelay: 300
};

export default Expire;
