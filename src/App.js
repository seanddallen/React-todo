import React, { Component } from 'react';
import './App.css';
import {Todos} from './Todos';
import AddTodo from './AddTodo';

class App extends Component {

  state = {
    todos: [
      {id: 1, content: "get hired"}
    ]
  }

  addTodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({todos})
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({todos})
  }


  render() {
    return (
      <div className="App">
        <h1>TODOS</h1>
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} deleteTodos={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
