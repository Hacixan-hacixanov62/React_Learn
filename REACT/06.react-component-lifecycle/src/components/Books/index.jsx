import { useEffect, useState } from "react"
import axios from "axios"
import {BASE_URL} from "../../constants/api"
import Loading from "../Loading"
import Swal from 'sweetalert2';

const Books = () => {
    const [books,setBooks]=useState(null);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);
    const [searchQuery,setSearchQuery] =useState("")
    
    const getBooks =async()=>{
        try {
            const response=await axios(`${BASE_URL}/books`)
            console.log(response.data);
            setBooks(response.data); //state 
        } catch (error) {
            console.log(error);
            
        }finally{
            setLoading(false);
        }
    }

    //infinite loop
    // getBooks()

    //search
    // const handleCahange =(e)=>{
    //   console.log(e.target.value)
    //   const searchValue =e.target.value.toLowerCase().trim()
    //   const filtered =books.filter((book)=>book.title.toLowerCase().includes(searchValue));
    //   // console.log(filtered);

    //   setBooks(filtered);
    // }
     
    const filteredBooks =books?.filter((book)=>book.title.toLowerCase().includes(searchQuery));
    const handleCahange =(e)=>{
      const searchValue =e.target.value.toLowerCase().trim()
      setSearchQuery(searchValue);
    }

    // Correct version
    useEffect(()=>{
     getBooks()
    },[])

    
  return (
    <div>
    <h2>Book List</h2>
    <div style={{padding: "irem 0"}}>
      <input type="search" placeholder="Search book.." onChange={handleCahange} />
    </div>
      {books ?
       
        <table>
            <thead>
                 <tr>
                    <th>ID</th>
                    <th>Book Name</th>
                    <th>Book Author</th>
                    <th>Price</th>
                    <th>Photo</th>
                    {/* <th>Actions</th> */}
                 </tr>
            </thead>
            <tbody>
                {
                    filteredBooks.map((book)=>{
                    return(
                    <tr key={book.id}>
                        <td>{book.id}</td>                       
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.price}</td>
                        <td><img src={book.coverImageURL} alt={book.title} width={100}></img></td>
                        <td>
                         {/* <button onClick={() => {
                            Swal.fire({
                                title: "Are you sure delete book?",
                                text: "You won't be able to revert this!",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                                confirmButtonText: "Yes, delete it!"
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    handleDelete(book.id);
                                    Swal.fire({
                                        title: "Deleted!",
                                        text: "Your file has been deleted.",
                                        icon: "success"
                                    });
                                }
                            });
                        }}>
                            <FaTrashCan style={{ color: "red" }} />
                        </button> */}
                        </td>
                    </tr>)
                  })

                }
            </tbody>
         </table>
        : <Loading/>
       } 
    </div>
  )
}

export default Books
