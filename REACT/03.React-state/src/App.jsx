import './App.css'
import asusPhoto from "./assets/images/Image 20.jpg"
import lenovaPhoto from "./assets/images/Image 21.jpg"
import Books from './components/Books'
import Layout from './components/Layout'


function App() {

  const handleClick=()=>{
    console.log("clicked");
  }

  return (
    <>
     <img src={asusPhoto} alt="asus" width={400}  />
     <img src={lenovaPhoto} alt="asus" width={400}  />
     { 

     }

     <hr />
     <Layout>
        <h1>Lorem ipsum dolor sit.</h1>
        <section>
          <h3>Lorem ipsum dolor sit.</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, dignissimos!</p>
        </section>
     </Layout>
     <hr />
     
     <Books/>
     <hr />   
     
     <button onClick={()=>{handleClick()}}>Click</button>
     <button onClick={handleClick}>Click</button>


    </>
  )
}

export default App
