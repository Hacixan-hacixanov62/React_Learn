import { useState } from 'react'
import './App.css'
import Input from './components/Input/Input'
import Card from './components/Card'
import Button from './components/Button'

//inline css
//global css (normal css)
//scss
//module css (module scss)
//css in js (styled components)
//ui kits

function App() {

  return (
    <>
       {/* <div style={Containerrrrrr}>
        <h1 className='text-red-400 text-center bg-yellow-500'>React Styling and UI Kits</h1>
        <button style={btnStyle}>Click me</button>
      </div> */}

      <Input/>
       <br />
      <input type="search" placeholder='search' />
      <br />

      <Card/>

      
      <hr />

      <button className='btn'>SignUp</button>
      <Button name="Login" />


      <hr />


    </>
  )
}

export default App
