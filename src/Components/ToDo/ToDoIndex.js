import React, { Component } from 'react';

class ToDoIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
                task: '',
                completed: false
        }
    }

    addTask() {
        console.log('in addTask')
        this.setState = ({
            task: 'Pay bills',
            completed: false
        })

        console.log('in addTask', this.state[0])
    }

    render() {
        return (
            <>
                {/* <input placeholder='Enter the task' />
                <button type='button' onClick={this.addTask}>Add Task</button> */}

            </>
        )
    }
}

export default ToDoIndex