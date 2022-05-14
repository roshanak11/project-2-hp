// function App() {
//   return <h1>
//     Hey World.
//   </h1>
// }

// export default App


import React from "react"
import Line from "./components/Line"

function App() {
  const [lines, setLines] = React.useState(undefined)

  React.useEffect(() => {
    async function fetchLines() {
      // const resp = await fetch("https://api.tfl.gov.uk/line/mode/tube/status")
      const resp = await fetch("http://hp-api.herokuapp.com/api/characters/")
      const data = await resp.json()
      setLines(data)
      console.log(data)
    }
    fetchLines()

    setInterval(() => {
      fetchLines()
    }, 300000)

  }, [])


  return <div className="container">
    {lines ? lines.map(line => {
      return <Line
        key={line.id}
        name={line.name}
        // id={line.id}
        // status={line.lineStatuses[0].statusSeverityDescription}
      />
    }) : <p>Awaiting lines...</p>}
  </div>
}


export default App

///Week 11 01



// ! Destructuring import syntax!
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Home from "./components/Home"
import About from "./components/About"
import Products from "./components/Products"
import SingleProduct from "./components/Product"
import Navbar from "./components/Navbar"

function App() {
  // ! 1) You need a router. You'll pretty always use BrowserRouter
  // ! 2) You make a Routes component inside.
  // ! 3) You create all the actual Route components.
  // ! Those need 2 things: URL path, and the actual component to render.

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productName" element={<SingleProduct />} />
      </Routes>
    </Router>
  )
}

export default App
