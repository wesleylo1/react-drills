// Create an app that displays a to-do list. You will need two components, the App component and a Todo component. The App component should be responsible for getting new tasks and storing the list of tasks. The Todo component should be responsible for displaying the individual tasks from the App component. The App component should create a list of 'Todo' components passing down a task into the Todo component as a prop and display the list.

import React, { Component } from "react"
import "./App.css"
import Todo from "./Todo"

class App extends Component {
    constructor() {
        super()

        this.state = {
            input: "",
            list: []
        }

        this.handleAddTask = this.handleAddTask.bind(this)
    }

    handleInputChange(value) {
        this.setState({ input: value })
    }

    handleAddTask() {
        this.setState({
            list: [...this.state.list, this.state.input],
            input: ""
        })
        console.log(this.state.list)
    }

    render() {
        let list = this.state.list.map((element, index) => {
            return <Todo key={index} task={element} />
        })

        return (
            <div className="App">
                <h1>My to-do list:</h1>

                <div>
                    <input
                        value={this.state.input}
                        placeholder="Enter new task"
                        onChange={(e) => this.handleInputChange(e.target.value)}
                    />

                    <button onClick={this.handleAddTask}>Add</button>
                </div>

                <br />

                {list}
            </div>
        )
    }
}

export default App
