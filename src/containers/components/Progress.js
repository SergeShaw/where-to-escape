import React from 'react'
import PropTypes from 'prop-types'
import LinearProgress from '@material-ui/core/LinearProgress';

function Progress({ value, max, classes }) {
  return <LinearProgress variant="determinate" value={value / max * 100} />;
}

Progress.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
}

Progress.defaultProps = {
  max: 100,
}

export default Progress;
