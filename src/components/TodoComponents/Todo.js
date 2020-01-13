import React from "react";

class Todo extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="todoItem">
                <h2>{this.props.todoItem.task}</h2>
                <p>Completed? {this.props.completed ? "yes" : "no"}</p>
            </div>
        )
    }

}

export default Todo;