import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Question from './Question';

function RadioQuestion({ title, options }) {
  const [value, setValue] = useState(undefined);

  function handleOnSubmit() {
    if (!value) {
      console.log('cannot submit without value')
      return;
    }
    console.log(`Submited with value - ${value} - ${options[value].text}`);
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
            value={value}
            onClick={() => setValue(index)}
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
};

export default RadioQuestion
