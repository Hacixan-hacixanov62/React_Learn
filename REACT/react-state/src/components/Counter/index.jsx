import { useState } from 'react'

const Counter = () => {
  
  const [count, setCount] = useState(0)
  const [inputValue,setInputValue]=useState(0)


  const handleIncrement =() =>{

   setCount((prevCount)=>prevCount+1)

  }
  const handleDecrement =()=>{

     setCount((prevCount)=>prevCount-1)

  }

  const handleIncByValue =()=>{
    setCount((prevCount)=>prevCount + parseInt(inputValue))
  }

  const handleReset =()=>{
    setCount(0);
    setInputValue("")
  }

  return (
    <>
     <div style={{display: "flex",justifyContent:"center",gap:"irem"}}>
      <button onClick={handleIncrement}>+</button>
      <h2>{count}</h2>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>reset</button>
    </div>

    <div>
      <input type="text" placeholder="enter number.." vlaue={inputValue} onChange={(e)=>{
        setInputValue(e.target.value);
      }}/>
      <button onClick={handleIncByValue}>inc by value</button>
    </div>
    </>
  )
}

export default Counter
