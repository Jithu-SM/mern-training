import '../styles/Greeting.css'
import catImg from '../assets/img/cat.jpeg'
import sunImg from '../assets/img/sun.jpeg'
function Greeting({text}){
    const hour = new Date().getHours()
    
    let greet = "Morning"

    if (hour >= 5 && hour < 12)
        greet = "Morning"
    else if (hour >= 12 && hour < 16)
        greet = "Afternoon"
    else if (hour >= 16 && hour < 21)
        greet = "Evening"
    else
        greet = "Night"
    
    return(
        <div className='greet'>
            <h2 className="head2">Good {greet} {text}! </h2>
            {/* <img src="cat.jpeg" alt="Cat" /> */}
            <img src={catImg} width="200px" alt="Cat" />
            <img src={sunImg} width="200px" alt="Sun" />

        </div>
    )
}

export default Greeting