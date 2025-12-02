import Greeting from './components/Greeting.jsx'
import Profile from './components/Profile.jsx'
import ProfileList from './components/ProfileList.jsx'

function App(){

  // const person1 = {
  //   name:'Anshul',
  //   imag:'src/assets/img/Anshul.jpeg',
  //   phone:'+919876543210',
  //   email:'anshul@gamil.com'
  // }

  //   const person2 = {
  //   name:'Joel',
  //   imag:'src/assets/img/Joel.jpeg',
  //   phone:'+919876543210',
  //   email:'joel@gamil.com'
  // }

  //   const person3 = {
  //   name:'Sharon',
  //   imag:'src/assets/img/Sharon.jpeg',
  //   phone:'+919876543210',
  //   email:'sharon@gamil.com'
  // }

  return(
    <>
      <ProfileList />
      {/* <Profile person={person1}/>
      <Profile person={person2}/>
      <Profile person={person3}/> */}
      <Greeting text={"Kottayam"}/>
      <Greeting text={"RIT"}/>
      <Greeting text={"India"}/>
      <h1>Welcome to React Day 1</h1>
    </>
  )
}

export default App  //default export doesnt need {} while importing (only can have a single default export per page)
