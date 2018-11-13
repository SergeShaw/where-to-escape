import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import data from './data/ducks'

export default history => combineReducers({
  router: connectRouter(history),
  data,
});
