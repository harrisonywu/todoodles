import React from 'react'; 
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { todos: state.todos };
}

const ConnectedList = ({ todos }) => (
  <ul>
    {todos.map((listItem, index) => (
      <li key={index}> {listItem.todo} </li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList)

export default List;
