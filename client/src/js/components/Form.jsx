import React, { Component } from 'react';


class Form extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('handle submit func called')
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Place new todo"></input>
        <button type="submit">Submit Todo</button>
      </form>
    )
  }
}

export default Form;
