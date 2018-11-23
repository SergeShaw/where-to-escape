import React, { useState } from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';

function CheckboxQuestion({ options, onChange }) {
  const [optionsWithChecked, setOptions] = useState(options.map(option => ({
    ...option,
    checked: false,
  })));

  function handleChange(event) {
    const { checked, name } = event.target;

    const chosenOption = optionsWithChecked
      .find(option => option.id === +name)

    const updatedOptions = optionsWithChecked.map(option => ({
      ...option,
      checked: option.id === +name
        ? checked
        : !chosenOption.multiple || !option.multiple
          ? false
          : option.checked
    }))

    setOptions(updatedOptions);
    onChange(updatedOptions.filter(option => option.checked));
  }

  return (
    <FormGroup>
      {optionsWithChecked.map(option =>
        <FormControlLabel
          key={option.id}
          control={
            <Checkbox
              name={`${option.id}`}
              checked={option.checked}
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