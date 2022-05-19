// import React from "react"
// import CharacterCard from "./CharacterCard"

// function CharactersList() {
//   const [characters, updateCharacters] = React.useState([])

//   React.useEffect(() => {
//     console.log("The Characters List Page has mounted")
//   }, [])

//   React.useEffect(() => {
//     async function fetchCharacters() {
//       const resp = await fetch("http://hp-api.herokuapp.com/api/characters/")
//       const countriesData = await resp.json()
//       updateCharacters(charactersData)
//     }
//     fetchCharacters()
//   }, [])

//   return <section className="section">
//     <div className="container">
//       <div className="columns is-multiline">
//         {countries.map((character, i) => <Character key={i} {...character} />)}
//       </div>
//     </div>
//   </section>
// }


// export default CharactersList





import React from "react"
import CharacterCard from "./CharacterCard"

function Characters(){

  const [potterCharacter, setPotterCharacter] = React.useState(undefined)

  React.useEffect(() => {
    async function fetchCharacter() {
      const resp = await fetch("http://hp-api.herokuapp.com/api/characters/")
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
