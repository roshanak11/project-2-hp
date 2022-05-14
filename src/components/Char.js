import React from "react"

function Char({ name }) {
  return <div className={name}>
    <p>{name} - </p>
  </div>
}

export default Char