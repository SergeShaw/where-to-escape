import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';

import Progress from '../components/Progress';
import { styles } from './styles';

function Question({ children, onSubmit, classes, title }) {

  return (
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Progress value={22} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              {children}
            </FormControl>
          </Grid>
          <Grid item xs={12} >
            <Grid container justify="center">
              <Button variant="outlined" color="primary" onClick={onSubmit}>Продолжить</Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </main>
  )
};

Question.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(Question);
