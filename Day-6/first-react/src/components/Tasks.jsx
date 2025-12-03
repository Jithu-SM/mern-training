import React from 'react'

const Tasks = () => {
    const taskList = [
        {id:1, name:'a'},
        {id:2, name:'b'},
        {id:3, name:'c'}
]
  return (
    <div>
        <ul>
            {
                taskList.map((task)=>{
                    const isEven = task.id%2===0

                    // return <li
                    //     key={task.id}
                    //     style={{(isEven)?"green":"red"}}>
                    //     task.name</li>

                    if(task.id%2==0){
                        return <li key={task.id} style={{color:"green"}}>{task.name}</li>

                    }
                    else
                        return <li key={task.id} style={{color:"red"}}>{task.name}</li>

                    })

                // taskList.map((task)=>(
                //     <li key={task.id}>{task.name}</li>
                // ))
            }
        </ul>
    </div>
  )
}

export default Tasks