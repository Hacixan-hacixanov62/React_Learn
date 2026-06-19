import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Books from './components/Books'

// useEffect

// mounting (yaranma)
//updating (güncelleme)
//unmounting (yox olma/ silinme )

function App() {
   const [showCard, setshowCard] =useState(false)

   
  return (
    <>
      <h1>Hi, React </h1>

      <hr />
      <button style={{fontSize:"15px"}} onClick={()=>{
        setshowCard(!showCard)
      }}>Toggle Card</button>
      {
        showCard && <Card/>
      }
      <hr />
      <Books/>
    </>
  )
}

export default App
