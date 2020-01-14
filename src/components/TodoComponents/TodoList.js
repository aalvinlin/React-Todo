import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {

    render() {
        return (
            this.props.todoList.map(todo =>
            <Todo key={todo.id} todoItem={todo} toggleDone={this.props.toggleDone} className={todo.completed ? "completed" : ""} />
            )
        )
    }

}

export default TodoList;