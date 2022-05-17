// import React from "react"
// import Country from "./Country"

// function CountriesList() {
//   const [countries, updateCountries] = React.useState([])

//   React.useEffect(() => {
//     console.log("The Countries List Page has mounted")
//   }, [])

//   React.useEffect(() => {
//     async function fetchCountries() {
//       const resp = await fetch("https://restcountries.com/v3.1/all")
//       const countriesData = await resp.json()
//       updateCountries(countriesData)
//     }
//     fetchCountries()
//   }, [])

//   return <section className="section">
//     <div className="container">
//       <div className="columns is-multiline">
//         {countries.map((country, i) => <Country key={i} {...country} />)}
//       </div>
//     </div>
//   </section>
// }


// export default CountriesList





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
        image={character.image}
      /> // you need && everytime you run API. only do the stuff after && if it exists and is true, otherwise you'll get undefined
    })}
  </div>
      </div>
    </>
  )
}


export default Characters
