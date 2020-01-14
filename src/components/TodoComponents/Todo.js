import React from "react";

class Todo extends React.Component {

    render() {

        return (
            <div className="todoItem" key={this.props.todoItem.id} id={"task" + this.props.todoItem.id} onClick={() => this.props.toggleDone(this.props.todoItem.id)}>
                <h2 className="taskName">{this.props.todoItem.task}</h2>
                {/* <p>Done? {this.props.todoItem.completed ? "yes" : "no"}</p> */}
            </div>
        )
    }

}

export default Todo;