import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { startGame } from '../data/ducks';

class Start extends Component {
  render() {
    return (
      <button onClick={this.props.actions.startGame}>Start</button>
    )
  }
}

export default connect(
  state => {
    console.log(state);
    return state;
  }, dispatch => ({
    actions: bindActionCreators({ startGame }, dispatch)
  })
)(Start);
