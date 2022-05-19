import React from "react"
import { Link } from "react-router-dom"

function CharacterCard({ characterName, character }) {
  return <div className="column is-flex-direction-row is-one-quarter-desktop is-one-third-tablet">
    {/* <Link to={`/country/${common}`}> */}
    {/* // ! How to pass through more information about country, if needed.. */}
    <Link to={`/characters/${characterName}`} state={{ character }} >
      <div className="card">
        <div className="card-header">
          <div className="card-header-title">{characterName}</div>
        </div>
      </div>
    </Link>
  </div>
}

export default CharacterCard