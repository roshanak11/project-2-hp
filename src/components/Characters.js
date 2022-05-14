import React from "react"
import Char from "./Char"

function Characters(){

  const [potterCharacter, setCharacter] = React.useState(undefined)

  React.useEffect(() => {
    async function fetchCharacter() {
      const resp = await fetch("http://hp-api.herokuapp.com/api/characters/")
      const data = await resp.json()
      console.log(data)
      setCharacter(data)
    }
    fetchCharacter()
  }, [])

  console.log(potterCharacter)

  return (
    <>
      <div className='hero is-medium is-primary is-bold' >

        <h1 className='title'>Characters</h1>
        <div className="container">
    {potterCharacter && potterCharacter.map(character => {
      return <Char
        key={character.name}
        name={character.name}
      /> // you need && everytime you run API. only do the stuff after && if it exists and is true, otherwise you'll get undefined
    })}
  </div>
      </div>
    </>
  )
}


export default Characters
