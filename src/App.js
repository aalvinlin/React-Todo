import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

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
        }

      ],
      
      todoListToDisplay: []
    }

  }

  toggleDone = (id) => {

    this.setState(

      // find the item that was clicked on and toggle its completion status
      this.setState({todoList: this.state.todoList.map(item => {

        if (item.id === id)
          {

            // toggle CSS class to indicate that the task is completed
            document.getElementById("task" + id).classList.toggle("completed");
            
            // console.log(item, item.completed, !item.completed)

            return {
              ...item,
              completed: !item.completed
            }
          }
        else
          {
            return item;
          }
        }
      )
      }
    )
    )
  }

  removeCompleted = () => {

    this.setState({todoList: this.state.todoList.filter(item => !item.completed)});
    this.setState({todoListToDisplay: this.todoList})

  }

  addTodo = (todoText) => {

    if (todoText === "")
      { return; }

    this.setState(
      { todoList:
        [
          {
            task: todoText,
            id: Date.now(),
            completed: false
          },
          
          ...this.state.todoList
        ]
      }
    )

    this.setState({todoListToDisplay: this.todoList})
  }

  filterTasks = (filterText) => {

    if (filterText === "")
      {
        this.setState({todoListToDisplay: this.state.todoList});
      }
    else {

      this.setState({todoListToDisplay:       
        this.state.todoList.filter(item => item.task.toLowerCase().match(filterText.toLowerCase()))
      })

    }

  }

  render() {

    console.log("Starting render...")

    // workaround for first render, before the user has done any filtering and so todoListToDisplay is an empty array
    // can't set state here in render method
    let tasksToRender = this.state.todoListToDisplay;

    console.log(tasksToRender)

    if (tasksToRender === undefined || tasksToRender.length === 0)
    {
      tasksToRender = this.state.todoList;
    }

    return (
      <>
      <h1>Todo List</h1>
      <div className="todoListContainer">
        <div className="todoList">
          <TodoList todoList={tasksToRender} toggleDone={this.toggleDone} />
        </div>
        <TodoForm todoList={this.state.todoList} addTodo={this.addTodo} removeCompleted={this.removeCompleted} filterTasks={this.filterTasks} />
      </div>
      </>
    );
  }
}

export default App;
