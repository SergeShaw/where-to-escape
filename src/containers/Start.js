import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '@material-ui/core/Button';
import { startGame } from '../data/ducks';

class Start extends Component {
  render() {
    return (
      <Button variant="outlined" color="primary" onClick={this.props.actions.startGame}>Start</Button>
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
