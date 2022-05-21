import React from "react"
import CharacterCard from "./CharacterCard"

function Characters(){

  const [potterCharacter, setPotterCharacter] = React.useState(undefined)

  React.useEffect(() => {
    async function fetchCharacter() {
      const resp = await fetch("https://cryptic-everglades-76066.herokuapp.com/http://hp-api.herokuapp.com/api/characters/") //*To create https://
      const data = await resp.json()
      console.log(data)
      setPotterCharacter(data)
    }
    fetchCharacter()
  }, [])

  console.log(potterCharacter)

  return (
    <>
      <div className="container">
        <h1 className="title">Characters</h1>
        <div className="columns is-multiline">       
          {potterCharacter && potterCharacter.map(character => {
          return <CharacterCard
            key={character.name}
            characterName={character.name}
            character={character} // passes whole character
      /> // you need && everytime you run API. only do the stuff after && if it exists and is true, otherwise you'll get undefined
    })}
        </div>
      </div>
    </>
  )
}


export default Characters
