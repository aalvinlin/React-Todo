import React from "react";

class TodoForm extends React.Component {

    constructor() {

        super();
        this.state = {
            userInput: "a"
        }

    }

    handleSubmit = (event) => {
        event.preventDefault();
    
        this.props.addTodo(this.state.userInput);
      }
    
    handleChange = (event) => {
        this.setState({userInput: event.target.value});
    }

    render() {

        return (

            <form name="todoForm" onSubmit={this.handleSubmit}>

                <input type="text" name="todoToAdd" placeholder="new task name" onChange={this.handleChange} value={this.state.todoToAdd} />

                <button type="submit" name="Add" onClick={() => this.props.addTodo(this.state.userInput)}>Add</button>

                <br />
                
                <button name="Clear Completed" onClick={this.props.handleRemove}>Clear Completed</button>

            </form>

        )
    }

}

export default TodoForm;