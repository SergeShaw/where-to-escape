import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import withStyles from '@material-ui/core/styles/withStyles';
import Slider from '@material-ui/lab/Slider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';

const styles = {
  container: {
    padding: '150px 0px',
  },
};

function SliderQuestion({ title, options, onChange, classes, questionId }) {
  const [value, setValue] = useState(2);

  useEffect(() => {
    setValue(2);
  }, [questionId])

  function handleOnChange(event, newValue) {
    setValue(newValue);
    onChange(options[newValue]);
  }

  if (!options || !options.length) {
    return null;
  }

  return (
    <Grid container spacing={24} className={classes.container}>
      <Grid item xs={1}></Grid>
      <Grid item xs={1}>
        <Icon fontSize="large">accessibility</Icon>
      </Grid>
      <Grid item xs={8}>
        <Typography id="label">{options[value].text}</Typography>
        <Slider
          aria-label={title}
          name={title}
          value={value}
          onChange={handleOnChange}
          min={0}
          max={options.length - 1}
          step={1}
        />
      </Grid>
      <Grid item xs={2}>
        <Icon fontSize="large">accessibility</Icon>
        <Icon fontSize="large">accessibility</Icon>
        <Icon fontSize="large">accessibility</Icon>
      </Grid>
    </Grid>
  );
}

SliderQuestion.propTypes = {
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  classes: PropTypes.shape({}).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default withStyles(styles)(SliderQuestion);
