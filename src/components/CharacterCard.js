import React from "react"
import { Link } from "react-router-dom"

function CharacterCard({ character }) {
  return <div className="column is-one-quarter-desktop is-one-third-tablet">
    {/* <Link to={`/country/${common}`}> */}
    {/* // ! How to pass through more information about country, if needed.. */}
    <Link to={`/country/${common}`} state={{ countryRegion: region, countryImage: png }} >
      <div className="card">
        <div className="card-header">
          <div className="card-header-title">{common}</div>
        </div>
        <div className="card-image">
          <figure className="image image-is-1by1">
            <img src={png} alt={common} />
          </figure>
        </div>
        <div className="card-content">
          <h5>{region}</h5>
        </div>
      </div>
    </Link>
  </div>
}

export default CharacterCard