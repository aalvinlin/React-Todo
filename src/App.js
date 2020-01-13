import React from 'react';
import TodoList from "./components/TodoComponents/TodoList"

import "./app.css";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    
    super();

    this.state = {

      todoList: [
        {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
        {
          task: 'Task Three',
          id: 3,
          completed: false
        },
        {
          task: 'Task Four',
          id: 4,
          completed: false
        },
        {
          task: 'Task 5',
          id: 5,
          completed: false
        },
        {
          task: 'Task 6',
          id: 6,
          completed: false
        },

      ]
  }
}

  render() {
    return (
      <div className="todoListContainer">
        <h1>Todo List</h1>
        <TodoList todoList={this.state.todoList} />
      </div>
    );
  }
}

export default App;
