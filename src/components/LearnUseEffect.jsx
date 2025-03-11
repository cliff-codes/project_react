import {useEffect, useState} from "react"
//useEffect is used to handle side effects on the page

function LearnUseEffect() {
  const [counter, setCounter] = useState(0)  

  useEffect(() => {
    console.log("Welcome to this page")
  }, [])
 
  useEffect(() => {
    const fetchData = async() => {
       const res = await fetch('https://fakestoreapi.com/products')
       const data = await res.json()
       console.log(data)
    }
    fetchData() 
  }, [counter])

  //json eg {
//  "name" : "David",
//  "age":"12"
//}
   
  return(
    <div>
      Learning How useEffect Hook Works
      <div>{counter}</div>
      <button className="bg-slate-500 px-3 py-1 rounded-md" onClick={() => setCounter(counter + 1)}>+</button>
      <button className="bg-slate-500 px-3 py-1 rounded-md" onClick={() => setCounter(counter- 1)}>-</button>
    </div>
  )
}

export default LearnUseEffect
