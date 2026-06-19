import './App.css'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Book from './pages/Books'
import BookDetails from './pages/BooksDetails'
import AddBook from './pages/AddBook'
import NotFound from './pages/NotFound'




function App() {
  return (
    <>
      <Header/>
       
       <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/contact' element={<Contact/>} />
         {/* <Route path='/books' element={<Books/>}/> */}
         {/* <Route path='/books/new' element={<AddBook/>}/>
         <Route path='/books/:id' element={<BookDetails/>}/> */}

         <Route path='/books'>
           <Route index element={<Book/>}/>
           <Route path='new' element={<AddBook/>}/>
           <Route path=':id' element={<BookDetails/>}/>
         </Route>
         
         {/* Not found */}
        {/* <Route path='*' element={<h3>Not Found Page</h3>} /> */}
        <Route path='*' element={<NotFound/>} />
        
       </Routes>

      <Footer/>
    </>
  )
}

export default App
