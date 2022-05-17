import React from "react"
import { Link, useParams, useLocation } from "react-router-dom"
import CharacterCard from "./CharacterCard"

function ShowCharacter() {
  const location = useLocation() //this is going to fetch everything from characterCard.js
  console.log(location)

  // const { characterName } = useParams()
  const [character, setCharacter] = React.useState(undefined)


  if (!character) {
    return <p>Character Loading...</p>
  }

  return <section className="section">
    <div className="container">
      <h1>Hello Character Name!</h1>
      <Link to="/characters">{"⬅ Back to all characters"}</Link>
      <CharacterCard {...CharacterCard} />
    </div>
  </section>
}

export default ShowCharacter


