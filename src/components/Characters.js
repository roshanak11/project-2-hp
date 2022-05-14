// import React from "react"
// import Line from "./components/Line"

// function App() {
//   const [lines, setLines] = React.useState(undefined)

//   React.useEffect(() => {
//     async function fetchLines() {
//       const resp = await fetch("http://hp-api.herokuapp.com/api/characters/")
//       const data = await resp.json()
//       setLines(data)
//       console.log(data)
//     }
//     fetchLines()

//     setInterval(() => {
//       fetchLines()
//     }, 300000)

//   }, [])


//   return <div className="container">
//     {lines ? lines.map(line => {
//       return <Line
//         key={line.id}
//         name={line.name}
//         // id={line.id}
//         // status={line.lineStatuses[0].statusSeverityDescription}
//       />
//     }) : <p>Awaiting lines...</p>}
//   </div>
// }


// export default App
