import { useState,useEffect } from "react";
import axios from "axios"
import { Link } from "react-router-dom";

const Books = () => {
  const[books,setBooks]=useState(null);

  const getBooks=async ()=>{
    try {
      const response =await axios(`https://book-store-api-liard-three.vercel.app/books`)
      console.log(response.data)
      setBooks(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getBooks()
  },[])


  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books&&books.map((book)=>{
          return(<li key={book.id}>
            <span>{book.title}</span>
            <button>
              <Link to={`${book.id}`}>details</Link>
            </button>
          </li>)
        })}
      </ul>
    </div>
  )
}

export default Books
