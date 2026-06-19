import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

const BookDetails = () => {
  const[book,setBook]=useState(null);

  const {id} =useParams();
   
  const navigate = useNavigate()

  const handleGoBack=()=>{
   navigate(-1)
  }
  return (
    <div>
      <h1>BooksDetails</h1>
      <button style={{backgroundColor:"magenta"}} onClick={handleGoBack}>go back</button>
    </div>
  )
}

export default BookDetails
