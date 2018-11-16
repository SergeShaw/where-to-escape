import { handleActions, createAction } from 'redux-actions';
import Papa from 'papaparse';

export const startGame = createAction('startGame');

export const setData = createAction('setData');
export const clearData = createAction('clearData');

export const loadData = () => dispatch => {
  Papa.parse("http://localhost:3003/where-to-escape.csv", {
    download: true,
    header: true,
    trimHeaders: true,
    complete: data => {
      if (!data || !data.data) {
        console.error('cannot load data');
        return;
      }
      dispatch(setData(data.data));
    },
  });
}

export default handleActions(
  {
    [startGame]: state => state.map(row => ({
      ...row,
      order: 0,
    })),
    [setData]: (state, { payload }) => payload,
    [clearData]: () => [],
  },
  [],
);