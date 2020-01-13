import React from "react";

class Todo extends React.Component {

    constructor() {
        super();
    }

    render() {

        console.log(this.props.todoItem);

        return (
            <div className="todoItem" id={"task" + this.props.todoItem.id} onClick={() => this.props.toggleDone(this.props.todoItem.id)}>
                <h2 className="taskName">{this.props.todoItem.task}</h2>
                {/* <p>Done? {this.props.todoItem.completed ? "yes" : "no"}</p> */}
            </div>
        )
    }

}

export default Todo;