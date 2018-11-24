import { handleActions, createAction } from 'redux-actions';

export const setResult = createAction('setResult');
export const clearResult = createAction('clearResult');

export default handleActions(
  {
    [setResult]: (state, { payload }) => payload,
    [clearResult]: () => [],
  },
  [],
);
