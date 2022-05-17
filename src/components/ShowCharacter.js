// import React from "react"
// import { Link, useParams, useLocation } from "react-router-dom"
// import CharacterCard from "./CharacterCard"

// function ShowCharacter() {
//   const location = useLocation()
//   console.log(location)

//   const { characterName } = useParams()
//   const [character, setCharacter] = React.useState(undefined)


//   if (!character) {
//     return <p>Character Loading...</p>
//   }

//   return <section className="section">
//     <div className="container">
//       <h1>Hello Character Name!</h1>
//       <Link to="/characters">{"⬅ Back to all characters"}</Link>
//       <Character {...character} />
//     </div>
//   </section>
// }

// export default ShowCharacter


import React from "react"

function SingleCharacter(){
  // const location = useLocation()
//   console.log(location)

//   const { characterName } = useParams()
//   const [character, setCharacter] = React.useState(undefined)

//   React.useEffect(() => {
//     async function fetchCountry() {
//       const resp = await fetch(`https://restcountries.com/v3.1/name/${characterName}`)
//       const countryData = await resp.json()
//       setCharacter(countryData[0])
//     }
//     fetchCountry()
//   }, [characterName])

//   if (!character) {
//     return <p>Character Loading...</p>
//   }

//   return <section className="section">
//     <div className="container">
//       <h1>Hello Character Name!</h1>
//       <Link to="/countries">{"⬅ Back to all countries"}</Link>
//       <Character {...character} />
//     </div>
//   </section>
// }
  return (
    <>
      <div className='hero is-medium is-primary is-bold' >

        <h1 className='title'>Show Character</h1>
      </div>
    </>
  )
}

export default SingleCharacter