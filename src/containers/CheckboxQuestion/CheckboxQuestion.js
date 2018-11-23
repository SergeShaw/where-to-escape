import React, { useState } from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';

function CheckboxQuestion({ options, onChange }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

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
          control={
            <Checkbox
              name={`${option.id}`}
              checked={isOptionChecked(option)}
              onChange={handleChange}
            />
          }
          label={
            <Typography variant="h5">
              {option.text}
            </Typography>
          }
        />
      )}
    </FormGroup>
  );
}

export default CheckboxQuestion;