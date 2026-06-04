const Increment = ({setCount}) => {
    const handleIncrement =() =>{

   setCount((prevCount)=>prevCount+1)

   }
  
  return (
    <div>
      <button onClick={handleIncrement}>+</button>
    </div>
  )
}

export default Increment
