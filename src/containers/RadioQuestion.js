import React, { useState } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import Question from './Question';
import { setData } from '../data/ducks';
import { PROPERTIES_NAMES } from '../data/constants';

function RadioQuestion({ title, options, actions, data }) {
  const [value, setValue] = useState(undefined);

  function handleOnSubmit() {
    if (!value) {
      console.log('cannot submit without value')
      return;
    }

    console.log(data.map(row => row.order))
    const newData = data.map(row => ({
      ...row,
      order: row.order += value.calculate(row),
    }))
    console.log(`Submited with value - ${value} - ${value.text}`, data, newData);
    console.log(newData.filter(row => row.order).map(row => row[PROPERTIES_NAMES.COUNTRY]))
    actions.setData(newData);
  }

  return (
    <Question onSubmit={handleOnSubmit}>
      {title}
      <br />
      {options.map((option, index) =>
        <label key={option.text}>
          <input
            type="radio"
            name={title}
            value={value && value.text === option.text}
            onClick={() => setValue(option)}
          />
          {option.text}
          <br />
        </label>
      )}
    </Question>
  )
}

RadioQuestion.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,

  actions: PropTypes.shape({
    setData: PropTypes.func.isRequired,
  }),
};

export default connect(
  state => ({
    data: state.data,
  }),
  dispatch => ({
    actions: bindActionCreators({ setData }, dispatch)
  })
)(RadioQuestion);
