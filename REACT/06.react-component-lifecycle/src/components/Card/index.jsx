import { useEffect, useState } from "react"

const Card = () => {
  const [count,setCount]=useState(0)
  console.log("card component rerender");
  
  useEffect(()=>{
    console.log("card mounted");

    //cleanup function
    return ()=>{
      console.log("card unmounted");    
    }
  },  [])
  
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      <div style={{width:"300px",padding: "1rem",border: "1px solid #ccc"}}>
        <h3>Card Title</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>

        <button onClick={()=>{setCount((prevCount)=>prevCount + 1)}}>Count is {count}</button>
      </div>
    </div>
    
  )
}

export default Card
