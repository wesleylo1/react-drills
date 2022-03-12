// adding a new task to the task array that'll be in the app.js file

import React, { Component } from "react"

export default class NewTask extends Component {
    constructor() {
        super()

        this.state = {
            input: ""
        }

        this.handleAdd = this.handleAdd.bind(this)
    }

    handleInputChange(val) {
        this.setState({ input: val })
    }

    handleAdd() {
        this.props.add(this.state.input)
        this.setState({ input: "" })
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.input}
                    placeholder="Enter new task"
                    onChange={(e) => this.handleInputChange(e.target.value)}
                    type="text"
                />
                <button onClick={this.handleAdd}>Add</button>
            </div>
        )
    }
}
