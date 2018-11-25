import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

function CheckboxQuestion({ options, isIconCheckbox, onChange, questionId }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    setSelectedOptions([]);
  }, [questionId])

  function handleChange(event) {
    const { checked, name } = event.target;

    const chosenOption = options.find(option => option.id === +name);

    if (!chosenOption) {
      console.log('cannot find selected option');
      return;
    }

    if (checked) {
      const newValues = chosenOption.multiple ?
        [
          ...selectedOptions.filter(selectedOption => selectedOption.multiple),
          chosenOption
        ] :
        [chosenOption];
      setSelectedOptions(newValues);
      onChange(newValues);
    } else {
      const newValues = selectedOptions.filter(selectedOption =>
        selectedOption.id !== chosenOption.id);
      setSelectedOptions(newValues);
      onChange(newValues);
    }
  }

  function isOptionChecked(option) {
    return selectedOptions.some(selectedOption =>
      selectedOption.id === option.id
    );
  }

  return (
    <FormGroup>
      {options.map(option =>
        <FormControlLabel
          key={option.id}
          control={isIconCheckbox ?
            <Checkbox
              name={`${option.id}`}
              checked={isOptionChecked(option)}
              onChange={handleChange}
              icon={
                <Icon style={{ fontSize: 70 }}>
                  {option.icon}
                </Icon>
              }
              checkedIcon={
                <Icon color="primary" style={{ fontSize: 70 }}>
                  {option.icon}
                </Icon>
              }
            />
            :
            <Checkbox
              name={`${option.id}`}
              checked={isOptionChecked(option)}
              onChange={handleChange}
            />
          }
          label={!isIconCheckbox ?
            <Typography variant="h5">
              {option.text}
            </Typography>
            : null
          }
        />
      )}
    </FormGroup>
  );
}

CheckboxQuestion.propTypes = {
  onChange: PropTypes.func.isRequired,
  questionId: PropTypes.number.isRequired,
  isIconCheckbox: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
  })).isRequired,
};

CheckboxQuestion.defaultProps = {
  isIconCheckbox: false,
};

export default CheckboxQuestion;