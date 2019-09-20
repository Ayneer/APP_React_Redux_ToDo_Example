import React, { Component } from 'react';
import ListTodo from './components/listTodo';
import AddTodo from './components/addTodo';
import { connect } from 'react-redux';

import './App.css';


class App extends Component {

  render() {

    console.log("render app");

    return (
      <div className="App">
        <h5>To do </h5>
        <ListTodo todos={this.props.todos} delteTodo={this.props.deleteTodo} />
        <AddTodo addTodo={this.props.addTodo} />
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    deleteTodo: (id) => {
      dispatch({type: 'DELETE_TODO', id})
    },
    addTodo: (todo) => {
      dispatch({type: 'ADD_TODO', todo})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
