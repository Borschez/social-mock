import React from 'react';

import './style.css';

export class ControlledForm extends React.PureComponent {
  state = {
    text1: '',
    text2: '',
    textarea: '',
    select: '',
    select2: [],
    checkbox: false,
    radio: '1',
  };

  handleInputChange = (e) => {
    let { name, value, type, selectedOptions, checked } = e.target;

    if (type === 'select-multiple') {
      value = [...selectedOptions].map(({ value }) => value);
    }

    if (type === 'checkbox') {
      value = checked;
    }

    this.setState({ [name]: value });
  };

  render() {
    const { text1, text2, textarea, select, select2, checkbox, radio } =
      this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          name="text1"
          type="text"
          value={text1}
          onChange={this.handleInputChange}
        />
        <input
          name="text2"
          type="text"
          value={text2}
          onChange={this.handleInputChange}
        />
        <textarea
          name="textarea"
          type="text"
          value={textarea}
          onChange={this.handleInputChange}
        />
        <select
          name="select"
          type="text"
          value={select}
          onChange={this.handleInputChange}
        >
          <option value="1">Значение 1</option>
          <option value="2">Значение 2</option>
          <option value="3">Значение 3</option>
          <option value="4">Значение 4</option>
        </select>
        <select
          name="select2"
          multiple={true}
          type="text"
          value={select2}
          onChange={this.handleInputChange}
        >
          <option value="1">Значение 1</option>
          <option value="2">Значение 2</option>
          <option value="3">Значение 3</option>
          <option value="4">Значение 4</option>
        </select>
        <label>
          CheckBox
          <input
            name="checkbox"
            type="checkbox"
            checked={checkbox}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          radio 1
          <input
            name="radio"
            type="radio"
            checked={radio === '1'}
            value="1"
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          radio 2
          <input
            name="radio"
            type="radio"
            checked={radio === '2'}
            value="2"
            onChange={this.handleInputChange}
          />
        </label>
        <button>Отправить</button>
      </form>
    );
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
}

export class UncontrolledForm extends React.PureComponent {
  inputRef = React.createRef();

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.inputRef.current.value);
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input ref={this.inputRef} defaultValue="test" />

        <input type="submit" value="Send" />
      </form>
    );
  }
}
