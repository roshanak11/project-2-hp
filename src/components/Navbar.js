// // ? Import Link component
import { Link } from "react-router-dom"
import React from "react"

// ! The one difference in this navigation, are the Link components.
function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar is-dark">
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item">
                <h1 id="home">Home</h1>
              </Link>
              <Link to="/characters" className="navbar-item">
              <h1 id="characters">Characters</h1>
              </Link>
              <Link to="/characters/:showcharacters" className="navbar-item">
              <h1 id="showcharacter">Show Character</h1>
              </Link>
              <Link to="/favourites" className="navbar-item">
              <h1 id="favouritecharacter">Favourite Character</h1>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
