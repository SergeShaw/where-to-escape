import React from 'react'
import { connect } from 'react-redux';
import { push } from 'connected-react-router'
import Button from '@material-ui/core/Button';
import { startGame } from '../data/ducks';

import Home from './Home'

function Start({ startGame, push }) {
  function handelStart() {
    startGame();
    push("/question/1");
  }

  return (
    <Home startGame={handelStart} />
    // <Button
    //   variant="outlined"
    //   color="primary"
    //   onClick={handelStart}
    // >Start</Button>
  );
}

export default connect(null, { startGame, push })(Start);
