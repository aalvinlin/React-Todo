import React from "react";

class TodoForm extends React.Component {

    constructor() {

        super();
        this.state = {
            todoToAdd: ""
        }

    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    handleChange = (event) => {

        this.state.todoToAdd = event.target.value;

    }

    handleRemove = (event) => {

    }

    render() {


        return (

            <form name="todoForm" onSubmit={this.handleSubmit}>

                <input type="text" name="todoToAdd" placeholder="new task name" onChange={this.handleChange} value={this.state.todoToAdd} />

                <button type="submit" name="Add">Add</button>

                <br />
                
                <button name="Clear Completed" onClick={this.handleRemove}>Clear Completed</button>

            </form>

        )
    }

}

export default TodoForm;