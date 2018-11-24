import { handleActions, createAction } from 'redux-actions';
import Papa from 'papaparse';
import { setResult } from '../containers/result/ducks';
import { push } from 'connected-react-router';

export const setData = createAction('setData');
export const clearData = createAction('clearData');

export const finishGame = () => (dispatch, getState) => {
  const newData = [...getState().data].sort((a, b) => b.order - a.order);
  const tier1Country = newData[0];
  const tier2Countries = [newData[1], newData[2]];
  const tier3Country = newData[3];

  dispatch(setResult({
    tier1Country,
    tier2Countries,
    tier3Country,
  }));
  dispatch(push('/result'))
}

export const startGame = () => dispatch => {
  Papa.parse("http://localhost:3000/where-to-escape.csv", {
    download: true,
    header: true,
    trimHeaders: true,
    complete: data => {
      if (!data || !data.data) {
        console.error('cannot load data');
        return;
      }
      dispatch(setData(data.data.map(row => ({
        ...row,
        order: 0,
      }))));
    },
  });
}

export default handleActions(
  {
    [setData]: (state, { payload }) => payload,
    [clearData]: () => [],
  },
  [],
);