import Greeting from './components/Greeting.jsx'

function App(){

  return(
    <>
      <Greeting text={"Kottayam"}/>
      <Greeting text={"RIT"}/>
      <Greeting text={"India"}/>
      <h1>Welcome to React Day 1</h1>
    </>
  )
}

export default App  //default export doesnt need {} while importing (only can have a single default export per page)
