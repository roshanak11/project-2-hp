import React from "react"

function Char({ name, image }) {
  return <div className={name}>
    <p>{name} - <img src={image} /></p>
  </div>
}

export default Char