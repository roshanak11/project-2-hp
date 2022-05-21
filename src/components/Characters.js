import React from "react"
// Line below: Importing CharacterCard.js so we can use the props accordingly
import CharacterCard from "./CharacterCard" 

//Line below, creates function Characters
function Characters(){

  // Creates a useState so we can fetch and print out all the characters. useState is undefined.
  const [potterCharacter, setPotterCharacter] = React.useState(undefined)

  // fetch API and console.logs data to test if it actually fetched the API and caught the data response
  React.useEffect(() => {
    async function fetchCharacter() {
      const resp = await fetch("https://cryptic-everglades-76066.herokuapp.com/http://hp-api.herokuapp.com/api/characters/") //*To create https:// using proxy 
      const data = await resp.json()
      console.log(data)
      setPotterCharacter(data)
    }
    fetchCharacter()
  }, [])

  console.log(potterCharacter)

  // Lines below:The divs with classNames use bulma classNames for formatting to make it looks nice and presentable
  return (
    <>
      <div className="container">
        <h1 className="title">Characters</h1>
        <div className="columns is-multiline">   
            {/* Line below: // you need && everytime you run API. this tells you to only run the code (after API has fetched characters) after && if it exists and is true/returns true, otherwise you'll get undefined because react.useState(undefined) is "undefined"*/}
            {/* Line below: we are mapping through the API and we are passing through the character's name in characterName={character.name} and all the information provided for the character in character={character}. character and characterName are props */}
          {potterCharacter && potterCharacter.map(character => {
          return <CharacterCard
            key={character.name} // key. a key is a unique identifier that will know each character for updating purposes
            characterName={character.name} // characterName is a prop we use as a parameter in CharacterCard to pull the character's name from the API.
            character={character} // passes whole character's information from the API. This prop is used as a parameter in CharacterCard.
      /> 
    })}
        </div>
      </div>
    </>
  )
}

// Line below: export Characters so it can be imported and used in other .js files
export default Characters
