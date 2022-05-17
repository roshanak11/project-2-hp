// import React from "react"
// import { Link, useParams, useLocation } from "react-router-dom"
// import Country from "./Country"

// function ShowCountry() {
//   const location = useLocation()
//   console.log(location)

//   const { countryName } = useParams()
//   const [country, setCountry] = React.useState(undefined)

//   React.useEffect(() => {
//     async function fetchCountry() {
//       const resp = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
//       const countryData = await resp.json()
//       setCountry(countryData[0])
//     }
//     fetchCountry()
//   }, [countryName])

//   if (!country) {
//     return <p>Country Loading...</p>
//   }

//   return <section className="section">
//     <div className="container">
//       <h1>Hello Country Name!</h1>
//       <Link to="/countries">{"⬅ Back to all countries"}</Link>
//       <Country {...country} />
//     </div>
//   </section>
// }

// export default ShowCountry


import React from "react"

function SingleCharacter(){
  return (
    <>
      <div className='hero is-medium is-primary is-bold' >

        <h1 className='title'>Show Character</h1>
      </div>
    </>
  )
}

export default SingleCharacter