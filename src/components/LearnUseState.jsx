
import {useState} from "react"

function LearnUseState({name, age}){
  
  const[counter, setCounter ]=useState(0)

  return(<div>
    {`Hello ${name}, you are ${age}years old`}
  </div>)
}

function greet(name, age){
  console.log(`Hello ${name}, you are ${age} years old`)
}

greet("David", 20)
greet("Abdulai", 18)

export default LearnUseState
