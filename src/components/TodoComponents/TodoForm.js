import React from "react";

class TodoForm extends React.Component {

    constructor() {

        super();
        this.state = { todoToAdd: "", filterText: "" }
    }

    handleSubmit = (event) => {
        event.preventDefault();
    
        this.setState({ todoToAdd: ""});
      }
    
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {

        return (

            <form name="todoForm" onSubmit={this.handleSubmit}>

                <p className="inputDescription">Add a new task</p>

                <input type="text" name="todoToAdd" placeholder="new task name" onChange={this.handleChange} value={this.state.todoToAdd} />

                <button type="submit" name="Add" onClick={() => this.props.addTodo(this.state.todoToAdd)}>Add</button>

                <br />

                <p className="inputDescription">Clear Completed Tasks</p>
                
                <button name="clear" onClick={this.props.removeCompleted}>Clear</button>

                <br />

                <p className="inputDescription">Filter Tasks</p>

                <input type="text" name="filterText" placeholder="text to filter by" onChange={this.handleChange} value={this.state.filterText} />

                <button name="filter" onClick={() => this.props.filterTasks(this.state.filterText)}>Filter</button>

                

            </form>

        )
    }

}

export default TodoForm;