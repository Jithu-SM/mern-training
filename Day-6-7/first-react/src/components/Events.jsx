import React from 'react'

const Events = () => {
    const handleClick=(event)=>{
        console.log("You Clicked Me")
        console.log(event)
    }
    const handleEnter=()=>{
        console.log("Entered")
        
    }
    const handleLeave=()=>{
        console.log("Leaved")
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("submitted")
    }
  return (
    <div>
        <button onClick={handleClick} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>Click Me</button>
        <button onClick={()=>{
            alert('Heloo')
            }}>
                Alert Me</button>
        <form action="#" onSubmit={(e)=>handleSubmit(e)}>
            <input type="text" placeholder='Enter your text' onChange={(e)=>{
                console.log(e.target.value)

            }} />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Events