import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            this.props.todoList.map(todo =>
            <Todo key={todo.id} todoItem={todo} toggleDone={this.props.toggleDone} />
            )
        )
    }

}

export default TodoList;