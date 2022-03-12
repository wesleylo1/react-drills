// Create an app that has three routes (using react-router-dom):

// Component name: Home, Component route: '/'
// Component name: Signup, Component route: '/signup'
// Component name: details, Component route: '/details'

// import React, { Component } from "react"
// import "./App.css"

// import { Link } from "react-router-dom"
// import router from "./router"

// export default class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <nav>
//           <li>
//             <Link to="/">Home</Link>
//           </li>

//           <li>
//             <Link to="/signup">Signup</Link>
//           </li>

//           <li>
//             <Link to="/details">Details</Link>
//           </li>
//         </nav>

//         <br />
//         {router}
//       </div>
//     )
//   }
// }

import React, { Component } from "react"
import "./App.css"

import { Link } from "react-router-dom"
import router from "./router"

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/details">Details</Link>
          </ul>
        </nav>

        <br />

        {router}
      </div>
    )
  }
}

export default App
