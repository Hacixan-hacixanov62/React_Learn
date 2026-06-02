import './App.css'
import Button from './components/Button'
import Greeting from './components/Greeting'
import UserCard from './components/UserCard'
import Parent from './components/Parent'



 

function App() {
  return (
    <>
      {/* <Header/> */}

     <hr />
      <Greeting name={"davar"} age={20} test={"lorem"}/> 
      <Greeting name={"dasas"}/> 

     <div style={{display:"flex"}}>
       <UserCard name ="sasas" age={32} email="salam@gmail.com" avatar="https://i.pravatar.cc/100?img=1"/>
       <UserCard name ="dsas" age={32} email="salam@gmail.com" avatar="https://i.pravatar.cc/100?img=1"/>
       <UserCard name ="yolcu" age={32} email="salam@gmail.com" avatar="https://i.pravatar.cc/100?img=1"/>
     </div>
     
      <Button/>
 
      <Parent/>

      <hr />
      <Button text={"click"} className={"warning"} />
      <Button text={"sign up"} />
      <Button text={"contact"} className={"light"} />

      <hr />

      {/* <Footer/> */}

    </>
  )
}

export default App



// function sayHi(name) {
//   return `Hello ${name}`
// }

// console.log(sayHi("sabin"))
// console.log(sayHi("sdsd"))
