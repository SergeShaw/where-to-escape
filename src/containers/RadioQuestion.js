import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';

function RadioQuestion({ title, options, onChange, questionId }) {
  const [value, setValue] = useState(undefined);

  useEffect(() => {
    setValue(undefined);
  }, [questionId])

  function handleOnChange(event) {
    const newValue = event.target.value;

    const selectedOption = options.find(option => option.text === newValue);
    if (!selectedOption) {
      console.log('cannot find selected value');
      return;
    }

    setValue(newValue);
    onChange(selectedOption);
  }

  if (!options || !options.length) {
    return null;
  }

  return (
    <RadioGroup
      aria-label={title}
      name={title}
      value={value}
      onChange={handleOnChange}
    >
      {options.map(option =>
        <FormControlLabel
          key={option.text}
          value={option.text}
          control={<Radio />}
          label={
            <Typography variant="h5">
              {option.text}
            </Typography>
          }
        />
      )}
    </RadioGroup>
  )
}

RadioQuestion.propTypes = {
  onChange: PropTypes.func.isRequired,
  questionId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default RadioQuestion;
