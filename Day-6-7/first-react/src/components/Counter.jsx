import React from 'react'
import { useState } from 'react'


const Counter = ({size}) => {
    const [count, setCount] = useState(0)
    // let n=parseInt(size)
    const updateCount=()=>{
        setCount(count+size)
        console.log(count)
    }
  return (
    <div>
        <p>Count:{count}</p>
        <button onClick={updateCount}>Increment count</button>
        <hr/>
    </div>
  )
}

export default Counter