import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'connected-react-router'

import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { questions } from '../../data/questions';
import { setData, finishGame } from '../../data/ducks';
import { QUESTION_TYPES } from '../../data/constants';
import CheckboxQuestion from '../CheckboxQuestion';
import Progress from '../components/Progress';
import RadioQuestion from '../RadioQuestion';
import SliderQuestion from '../SliderQuestion';
import { styles } from './styles';

function Question({ match, classes, data, setData, push, finishGame }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const currentQuestionId = +match.params.id;
  const currentQuestion = questions.find(question => question.id === currentQuestionId);

  if (!currentQuestion) {
    push('/');
    return null;
  }

  function handleOnChange(value = []) {
    if (!Array.isArray(value)) {
      setSelectedOptions([value]);
      return;
    }
    setSelectedOptions(value);
  }

  function handleOnSubmit() {
    const newData = data.map(row => ({
      ...row,
      order: row.order + selectedOptions.reduce((sum, selectedOption) =>
        sum + selectedOption.calculate(row), 0)
    }));

    setData(newData);

    if (!currentQuestion.nextId) {
      finishGame();
      return null;
    }
    push(`/question/${currentQuestion.nextId}`);
    setSelectedOptions([]);
  }

  function renderQuestion() {
    switch (currentQuestion.type) {
      case QUESTION_TYPES.RADIO: {
        return <RadioQuestion
          questionId={currentQuestion.id}
          title={currentQuestion.title}
          options={currentQuestion.options}
          onChange={handleOnChange} />
      }
      case QUESTION_TYPES.CHECKBOX: {
        return <CheckboxQuestion
          questionId={currentQuestion.id}
          title={currentQuestion.title}
          options={currentQuestion.options}
          onChange={handleOnChange} />
      }
      case QUESTION_TYPES.ICON_CHECKBOX: {
        return <CheckboxQuestion
          questionId={currentQuestion.id}
          title={currentQuestion.title}
          isIconCheckbox={true}
          options={currentQuestion.options}
          onChange={handleOnChange} />
      }
      case QUESTION_TYPES.SLIDER: {
        return <SliderQuestion
          questionId={currentQuestion.id}
          title={currentQuestion.title}
          options={currentQuestion.options}
          onChange={handleOnChange} />
      }
      default: {
        return null;
      }
    }
  }

  return (
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Progress value={currentQuestion.id - 1} max={questions.length - 1} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              {currentQuestion.title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {renderQuestion()}
          </Grid>
          <Grid item xs={12} >
            <Grid container justify="center">
              <Button variant="outlined" color="primary" onClick={handleOnSubmit}>Продолжить</Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </main>
  )
};

Question.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,

  push: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
  finishGame: PropTypes.func.isRequired,
};

export default connect(state => (
  {
    pathname: state.router.location.pathname,
    data: state.data
  }
), {
    setData,
    finishGame,
    push,
  }
)(withStyles(styles)(Question));
