import React, { Component } from 'react';

class ToDoIndex extends Component {
    constructor(props) {
        super(props)
        // HERE:
        // Instead of using 2 arrays, consider using an array of objects, 
        // where each object has a task and a status.
        this.state = {
                newTask: '',
                tasksToDo: [],
                tasksCompleted: []
        }

        this.addTask = this.addTask.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({newTask: event.target.value})
    }

    addTask(event) {
        {console.log( this.state.newTask )}
        // HERE:
        // Add this.state.newTask to the tasksToDo array.
    }

    completeTask() {
        // HERE:
        // Move the task from the tasksToDo array to the TasksCompleted array.
    }

    displayTaskList() {
        // HERE:
        // Display each task from the tasksToDo array along with a 'Not Done' status,
        // and each task from the tasksCompleted array along with a 'Completed status.
    }

    render() {
        return (
            <>
            <form onSubmit={this.addTask}>
                <label>Task:
                <input type="text" value={this.state.task} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Add Task" />
                {/* <button onClick={(newTask) => {this.addTask(newTask)}}>Add Task</button> */}
            </form>

            {/* HERE: */}
            {/* Display the tasks list (displayTaskList) and a button for each item in the 
            tasksToDo array to mark it as complete.  When the task is marked as complete, call the completeTask function to update both arrays. */}
            </>
        )
    }
}

export default ToDoIndex