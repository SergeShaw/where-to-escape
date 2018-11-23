import { handleActions, createAction } from 'redux-actions';
import Papa from 'papaparse';

export const setData = createAction('setData');
export const clearData = createAction('clearData');

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