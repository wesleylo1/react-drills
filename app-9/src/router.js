// import React from "react"
// import { Routes, Route } from "react-dom"

// import Home from "./Home"
// import Details from "./Details"
// import Signup from "./Signup"

// export default (
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="signup" element={<Signup />} />
//     <Route path="details" element={<Details />} />
//   </Routes>
// )

import React from "react"
import { Routes, Route } from "react-router-dom"

import Home from "./Home"
import Signup from "./Signup"
import Details from "./Details"

export default (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/details" element={<Details />} />
  </Routes>
)
