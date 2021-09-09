import React, { Component } from 'react';
import { Input } from 'reactstrap'
 
class ToDoIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newTask: '',
            tasksToDo: ['homework', 'walk dog', 'email jeremy'],
            tasksCompleted: ['Unload dishwasher', 'email Jen']
        }

        this.addTask = this.addTask.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        console.log('in handleChange')
        this.setState({ newTask: event.target.value })
    }

    addTask(event) {
        console.log('in addTask')
        { console.log(this.state.newTask) }
        this.state.tasksToDo.push(this.state.newTask)
        { console.log(this.state.tasksToDo)}
    }

    completeTask() {
        // Move the task from the tasksToDo array to the TasksCompleted array.
    }

    displayTaskList = (result, resultId) => <p key={resultId}>{result}</p>

    render() {
        return (
            <div>
                <input type="text" value={this.state.newtask} onChange={this.handleChange}/>
                <button type='button' onClick={this.addTask}>Add Task</button>
                
                <h3>Tasks To Do:</h3>
                { this.state.tasksToDo.map(this.displayTaskList) }

                <h3>Completed Tasks:</h3>
                { this.state.tasksCompleted.map(this.displayTaskList) }
            </div>

        )
    }
}

export default ToDoIndex