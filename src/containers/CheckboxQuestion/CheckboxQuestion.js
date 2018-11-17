import React, { Component } from 'react'
import options from './QuestionConfigurator';
import Question from '../Question';

class CheckboxQuestion extends Component {
  state = { options, changes: '' };

  handleInputChange = event => {
    const { checked, name } = event.target;

    const chosenOption = options
      .find(option => option.id === +name)

    this.setState((state) => ({
      options: state.options.map(option => ({
        ...option,
        checked: option.id === +name
          ? checked
          : chosenOption.isDependency || option.isDependency
            ? false
            : option.checked
      }))
    }));
  }

  handleSubmit = () => {
    const { options } = this.state;

    const changes = options
      .filter(option => option.checked)
      .map(option => option.changeDataValues())
      .join(' ');

    this.setState({
      changes,
    });
  }

  render() {
    const { options, changes } = this.state;

    return (
      <Question onSubmit={this.handleSubmit}>
        {options.map(option =>
          <label key={option.id}>
            <input
              name={option.id}
              type="checkbox"
              checked={option.checked}
              onChange={this.handleInputChange} />
            {option.text}
            <br />
          </label>
        )}
        <div>
          {changes}
        </div>
      </Question>
    );
  }
}

export default CheckboxQuestion;