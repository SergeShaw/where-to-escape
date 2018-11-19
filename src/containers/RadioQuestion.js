import React, { useState } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';

import { setData } from '../data/ducks';
import { PROPERTIES_NAMES } from '../data/constants';

function RadioQuestion({ title, options, actions, data, onSubmit }) {
  const [value, setValue] = useState(undefined);

  // TODO: move to Question
  function handleOnSubmit() {
    if (!value) {
      console.log('cannot submit without value');
      return;
    }

    const selectedOption = options.find(option => option.text === value);
    if (!selectedOption) {
      console.log('cannot find selected value');
      return;
    }

    console.log(data.map(row => row.order))
    const newData = data.map(row => ({
      ...row,
      order: row.order += selectedOption.calculate(row),
    }))
    console.log(`Submited with value - ${selectedOption.text}`, data, newData);
    console.log(newData.filter(row => row.order).map(row => row[PROPERTIES_NAMES.COUNTRY]))
    actions.setData(newData);
  }

  if (!options || !options.length) {
    return null;
  }

  return (
    <RadioGroup
      aria-label={title}
      name={title}
      value={value}
      onChange={event => setValue(event.target.value)}
    >
      {options.map(option =>
        <FormControlLabel
          key={option.text}
          value={option.text}
          control={<Radio />}
          label={
            <Typography variant="h5">
              {option.text}
            </Typography>} />
      )}
    </RadioGroup>
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
  onSubmit: PropTypes.func.isRequired,
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
