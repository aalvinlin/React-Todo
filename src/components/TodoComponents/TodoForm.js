import React from "react";

class TodoForm extends React.Component {

    constructor() {

        super();
        this.state = { userInput: "" }
    }

    handleSubmit = (event) => {
        event.preventDefault();
    
        this.setState({ userInput: ""});
      }
    
    handleChange = (event) => {
        this.setState({userInput: event.target.value});
    }

    render() {

        return (

            <form name="todoForm" onSubmit={this.handleSubmit}>

                <input type="text" name="todoToAdd" placeholder="new task name" onChange={this.handleChange} value={this.state.userInput} />

                <button type="submit" name="Add" onClick={() => this.props.addTodo(this.state.userInput)}>Add</button>

                <br />
                
                <button name="Clear Completed" onClick={this.props.removeCompleted}>Clear Completed</button>

            </form>

        )
    }

}

export default TodoForm;