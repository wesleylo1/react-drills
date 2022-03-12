//Imported TODO component in here, to create a list of the user's items, which will be in the TODO component.

import React, { Component } from "react"
import Todo from "./Todo"

export default class List extends Component {
    render() {
        let list = this.props.tasks.map((element, index) => {
            return <Todo key={index} task={element} />
        })
        return <div>{list}</div>
    }
}
