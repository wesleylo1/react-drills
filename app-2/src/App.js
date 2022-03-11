// Create an app where there is an array of data on state that is then shown on the DOM as a list. The array of data can be as simple as an array of strings. The list can be as simple as a list of <h2> elements.

import React, { Component } from "react"
import "./App.css"

class App extends Component {
    constructor() {
        super()

        this.state = {
            names: ["Jack", "Jill", "Beep", "Boop", "Rosa"]
        }
    }

    render() {
        // saving each name (element) from an index (key) to an h2 tag. saving the new array to variable. Done in render, since it's not returning to display on the DOM.
        let namesToDisplay = this.state.names.map((element, index) => {
            return <h2 key={index}>{element}</h2>
        })
        // returning the variable to the div for App.
        return <div className="App">{namesToDisplay}</div>
    }
}

export default App
