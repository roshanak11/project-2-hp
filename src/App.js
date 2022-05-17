
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import React from 'react'

import Home from "./components/Home"
import Characters from "./components/Characters"
import SingleCharacter from "./components/ShowCharacter"
// import Favorites from "./components/Favorites"
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
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:showcharacter" element={<SingleCharacter />} />
        {/* <Route path="/favorites" element={<Favorites />} /> */}
      </Routes>
    </Router>
  )
}

export default App
