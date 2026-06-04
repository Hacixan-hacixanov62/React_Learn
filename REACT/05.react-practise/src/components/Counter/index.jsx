import { useState } from 'react'
import Increment from './Increment'
import Decrement from './Decrement'
import IncrementByValue from './IncrementByValue'
import Reset from './Reset'
import CountResult from './CountResult'

const Counter = () => {
  
  const [count, setCount] = useState(0)
  const [inputValue,setInputValue]=useState(0)

  return (
   <>
     <div style={{display: "flex",justifyContent:"center",gap:"irem"}}>
       <Increment setCount={setCount}/>
       <CountResult count={count}/>
       <Decrement setCount={setCount}/>
       <Reset setCount={setCount} setInputValue={setInputValue}/>
      </div>
      <IncrementByValue setCount={setCount} setInputValue={setInputValue} inputValue={inputValue}/>
   </>
  )
}

export default Counter
