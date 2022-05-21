import React from "react"

//Lines below: Creates function Home. IDs homepage-background, homepage, title, and subtitle refer to CSS created in main.scss
function Home(){
  return (
    <>
    <div id="homepage-background"> 
      <div id="homepage">
        <h1 id="title">Welcome</h1>
        <h2 id="subtitle">Explore the interactive library of all of the Harry Potter characters.</h2>
        </div>
      </div>
    </>
  )
}

// Line below: export Home so it can be imported and used in other .js files
export default Home