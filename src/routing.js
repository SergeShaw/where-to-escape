import React, { Component } from 'react';
import { Route, Switch } from 'react-router' // react-router v4
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadData } from './data/ducks';
import Question from './containers/Question';
import CheckboxQuestion from './containers/CheckboxQuestion';
import Start from './containers/Start';
import RadioQuestion from './containers/RadioQuestion';
import { PROPERTIES_NAMES } from './data/constants';

class Routing extends Component {
  componentDidMount() {
    this.props.actions.loadData();
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Start} />
        <Route exact path="/checkbox" component={CheckboxQuestion} />
        <Route exact path="/1" render={() =>
          <RadioQuestion
            title="Хочешь, чтобы было тепло или это не важно?"
            options={[
              {
                text: "Хочу, чтобы было очень жарко",
                calculate: dataRow =>
                  dataRow[PROPERTIES_NAMES.T_WINTER] >= 5 && dataRow[PROPERTIES_NAMES.T_SUMMER] >= 25
              },
              {
                text: "Мне не важно",
                calculate: () => false
              },
              {
                text: "Мне нравится когда холодно",
                calculate: dataRow =>
                  dataRow[PROPERTIES_NAMES.T_WINTER] <= -10 && dataRow[PROPERTIES_NAMES.T_SUMMER] <= 15
              },
              {
                text: "Люблю умеренный климат",
                calculate: dataRow =>
                  dataRow[PROPERTIES_NAMES.T_WINTER] >= -10 && dataRow[PROPERTIES_NAMES.T_WINTER] <= 5 &&
                  dataRow[PROPERTIES_NAMES.T_SUMMER] >= 15 && dataRow[PROPERTIES_NAMES.T_SUMMER] <= 25
              },
            ]}
          />
        } />
        <Route exact path="/2" component={Question} />
        <Route render={() => (<div>Miss</div>)} />
      </Switch>
    )
  }
}

export default connect(
  null,
  dispatch => ({
    actions: bindActionCreators({ loadData }, dispatch)
  })
)(Routing);
