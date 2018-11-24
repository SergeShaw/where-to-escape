import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { PROPERTIES_NAMES } from '../../data/constants';

function Result({ tier1Country, tier2Countries, tier3Country }) {
  return (
    <Grid container spacing={24}>
      <Grid item xs={6}>
        <Typography variant="h2" gutterBottom>
          {tier1Country[PROPERTIES_NAMES.COUNTRY]}
        </Typography>
        <Typography variant="h4" gutterBottom>
          Подходящая для вас страна
        </Typography>
        <Typography variant="h3" gutterBottom>
          {tier2Countries.map(country => country[PROPERTIES_NAMES.COUNTRY]).join(', ')}
        </Typography>
        <Typography variant="h4" gutterBottom>
          Тоже неплохие варианты
        </Typography>
        <Typography variant="h3" gutterBottom>
          {tier3Country[PROPERTIES_NAMES.COUNTRY]}
        </Typography>
        <Typography variant="h4" gutterBottom>
          Ну если совсем приспичило уехать
        </Typography>
      </Grid>
      <Grid item xs={6}>
      </Grid>
    </Grid>
  )
}

Result.propTypes = {
  country: PropTypes.shape({}),
}

export default connect(state => ({
  ...state.result,
}))(Result);
