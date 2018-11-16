import React, { Component } from 'react'
import options from './QuestionConfigurator';

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

  handleSubmit = event => {
    const { options } = this.state;
    event.preventDefault();

    let newChanges = '';

    options.forEach(option => {
      if (option.checked) {
        newChanges += option.changeDataValues() + ' ';
      }
    })

    this.setState({
      changes: newChanges
    });
  }

  render() {
    const { options, changes } = this.state;

    return (
      <form onSubmit={this.handleSubmit} style={{ display: 'inline-grid' }}>
        {options.map(option =>
          <label key={option.id}>
            {option.text}:
            <input
              name={option.id}
              type="checkbox"
              checked={option.checked}
              onChange={this.handleInputChange} />
          </label>
        )}
        <button type="submit">
          Go next
        </button>
        <div>
          {changes}
        </div>
      </form>
    );
  }
}

export default CheckboxQuestion;