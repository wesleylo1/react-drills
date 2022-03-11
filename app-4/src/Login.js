import React, { Component } from "react"

export default class Login extends Component {
    constructor() {
        super()

        this.state = {
            username: "",
            password: ""
        }
    }

    handleUsername(val) {
        this.setState({ username: val })
    }

    handlePassword(val) {
        this.setState({ password: val })
    }

    displayInfo() {
        alert(
            `Username: "${this.state.username}" Password: "${this.state.password}"`
        )
    }

    render() {
        return (
            <div>
                <input
                    onChange={(e) => this.handleUsername(e.target.value)}
                    type="text"
                />
                <input
                    onChange={(e) => this.handlePassword(e.target.value)}
                    type="text"
                />
                <button onClick={() => this.displayInfo()}>Login</button>
            </div>
        )
    }
}
