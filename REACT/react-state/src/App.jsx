import { useState } from 'react'
import './App.css'
import Card from "./components/Card"
import Counter from "./components/Counter"
import Users from './components/Users'

 function App() {

  const [user,setUser]=useState({userName:"nihad"})
  const [cardStatus,setCardStatus]=useState(false)

  console.log("rendering")
  const handleChangeUser=()=>{
    user.userName ="asif"
    const newUser ={ ...user}
    setUser(newUser)
  }

  const showCard =()=>{
    setCardStatus(true)
  }

  const hideCard =() =>{
    setCardStatus(false)
  }

  const toggleCard =()=>{
    setCardStatus(!cardStatus)
  }

  return (
    <>
       <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      <Card 
        title="React Basics" 
        description="Learn the fundamentals of React components." 
        imageUrl="https://placeholder.com" 
      />
      <Card 
        title="Advanced Hooks" 
        description="Master useEffect, useMemo, and custom hooks." 
        imageUrl="https://placeholder.com" 
      />
    </div>
    <hr />
    <br />
    <hr />
     <h3>Hell0 {user.userName}</h3>
     <button onClick={handleChangeUser}>change user</button>
     <hr />
     <button onClick={showCard}>Show</button>
     <button onClick={hideCard}>Hide</button>
     <button onClick={toggleCard}>{cardStatus ? "hide":"show"}</button>
     
     {cardStatus ? <Card/>: <p>card yoxdur</p>}
     <br /><br />
      <Counter></Counter>
      <hr />
      <br />
      <Users/>
      
    </>
  )
}

export default App
