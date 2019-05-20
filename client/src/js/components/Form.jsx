import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: todo => dispatch(addTodo(todo))
  }
} 
class ConnectedForm extends Component {
  constructor() {
    super();

    this.state = {
      todo: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Implement redux into this... by using mapDispatchToProps
  handleChange(e) {
    this.setState({
      todo: e.target.value
    })
  }

  handleSubmit(e) {
    const { todo } = this.state;
    e.preventDefault();
    this.props.addTodo({ todo });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
         type="text"
         placeholder="Place new todo"
         onChange={this.handleChange}>
        </input>
        <button type="submit">Submit Todo</button>
      </form>
    )
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
