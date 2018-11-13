import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadData } from '../data/ducks';

class Start extends Component {
  componentDidMount() {
    this.props.actions.loadData();
  }

  render() {
    return (
      <button>Start</button>
    )
  }
}


export default connect(
  state => {
    console.log(state);
    return state;
  }, dispatch => ({
    actions: bindActionCreators({ loadData }, dispatch)
  })
)(Start);
