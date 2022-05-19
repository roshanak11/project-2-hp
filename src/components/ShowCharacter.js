import React from "react"
import { Link, useParams, useLocation } from "react-router-dom"
import CharacterCard from "./CharacterCard"

function ShowCharacter() {
  const location = useLocation() //this is going to fetch everything from characterCard.js
  const character = location.state.character
  return <section className="section">
    <div className="container">
      <h1>Hello Character Name!</h1>
      <h2>{character.name}</h2>
      <h3>{character.species}</h3>
      <Link to="/characters">{"⬅ Back to all characters"}</Link>
      <CharacterCard {...CharacterCard} />
    </div>
  </section>
}

export default ShowCharacter


