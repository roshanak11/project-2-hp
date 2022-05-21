// import React runs react
import React from "react"
// Line below: import { Link } allows you to use link component for us to link all the components together and click on ""⬅ Back to all characters" link on bottom of page to go back to CharacterCard.js which displays on the URL as "/characters" 
// Line below: import { useLocation } fetches everything from characterCard.js because the state was 'character' (which imports all the info from the API about the character). Then when we click on the Character button and all the information will be fetched from CharacterCard.js.
import { Link, useLocation } from "react-router-dom"

function ShowCharacter() {
  const location = useLocation() //this is going to fetch everything from characterCard.js
  const character = location.state.character // It creates a variable with location to make it easier to write our code, instead of importing each individual character trait from the API (such as gender, species, house, etc.) making a constant makes it easier for us to code so we can pull all the information about the character from the API without having to write the extra code for every single trait we are importing from the API. So it keeps our code concise and shorter.
/* Lines below: "section", "container" imports class names from bulma */
  return <section className="section">
    <div className="container">
       {/* Line below: imports class name "card" from main.scss. Creates card listing important character's traits from API in presentable format that aligns with Harry Potter font, colors, and theme */}
      <div id="card">
      {/* Line below: Headline. Styles each page with a heading of the character's name in classic Harry Potter font */}
      <h1>{character.name}</h1> 
      {/* Lines below: Our API is missing information for several characters but shows the same information for other characters. "&&" suggests If character traits are undefined, it will not display the traits. If character traits are given in the API, they will be displayed for that given character. */}
      <h2>
       {character.image && <p><img src={character.image} alt="character"></img></p>}
       {character.species && <p><strong>Species:</strong> {character.species}</p>}
       {character.gender && <p><strong>Gender:</strong> {character.gender}</p>}
       {character.ancestry && <p><strong>Ancestry:</strong> {character.ancestry}</p>}
       {character.ancestry && <p><strong>Ancestry:</strong> {character.ancestry}</p>}
       {character.patronus && <p><strong>Patronus:</strong> {character.patronus}</p>}
       {character.wand.core && <p><strong>Wand Core:</strong> {character.wand.core}</p>} 
      </h2>
      </div>
      {/* Line below: takes your back to CharacterCard.js */}
      <p id="back"><Link to="/characters">{"⬅ Back to all characters"}</Link></p> 
    </div>
  </section>
}

// Line below: export ShowCharacter so it can be used and imported in other .js files
export default ShowCharacter


