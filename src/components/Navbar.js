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
                Home
              </Link>
              <Link to="/characters" className="navbar-item">
                Characters
              </Link>
              <Link to="/characters/:showcharacters" className="navbar-item">
                Show Character
              </Link>
              <Link to="/favorites" className="navbar-item">
                Favourite Character
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
