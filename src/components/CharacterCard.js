import React from "react"
// Line below: import { Link } allows you to use link component for us to link all the components together and click on Character Name and go to ShowCharacter.js displaying the individual's Character card of characteristics
import { Link } from "react-router-dom" 

// Line below: function named CharacterCard with 2 parameters characterName and character props. The 2 props are defined in Characters.js. characterName pulls out the character's name from the list of characters. Character parameter pulls all of the character's info from the API. 
function CharacterCard({ characterName, character }) { 
  // Line below: Fixes the size of the buttons for character names for the desktop so it looks neat and presentable. It is using bulma CSS. 
  return <div className="column is-flex-direction-row is-one-quarter-desktop is-one-third-tablet"> 
{/* Code below <Link></Link> is code for button of each character's name */}
{/*Line below: When you click the character name button, you are redirected a link to a new page which has the path of the character's name, but this only shows the new path if the button is clicked. At the moment it only shows /characters/ and the list of characters names displayed on the page as buttons. And the state imports all the information for that specific character's API so that specific characteristics can be used and listed in  ShowCharacter.js. */} 
    <Link to={`/characters/${characterName}`} state={{ character }} > 
    {/* Line below: creates a div which has a class name card from bulma so that it looks nice */}
      <div className="card">
            {/* Line below: creates a div which has a class name card-header from bulma so that it looks nice */}
        <div className="card-header">
              {/* Line below: creates a div which has a class name card-header-title from bulma so that it looks nice. And it returns the character's name which we map in Characters.js. */}
          <div className="card-header-title">{characterName}</div>
        </div>
      </div>
    </Link>
  </div>
}

// Line below: export CharacterCard so it can be imported and used in other .js files
export default CharacterCard