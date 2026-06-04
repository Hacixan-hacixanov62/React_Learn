const Decrement = ({setCount}) => {
   const handleDecrement =()=>{

     setCount((prevCount)=>prevCount-1)

   }
  return (
    <div>
     <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default Decrement
