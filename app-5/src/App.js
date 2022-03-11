// Create an Image component that renders an <img /> element. The src for the <img /> should be passed down as a prop from the parent component. You can use whatever image URL you would like to or you can get a placeholder from placeholder.com

import React, { Component } from "react"
import "./App.css"
import Image from "./Image"

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Image
                    url={
                        "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1352&q=80"
                    }
                />
            </div>
        )
    }
}
