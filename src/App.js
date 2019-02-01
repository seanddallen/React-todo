import React, { Component } from 'react';
import './App.css';
import {Todos} from './Todos';

class App extends Component {

  state = {
    todos: [
      {id: 1, content: "get hired"}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>TODOS</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
