import React, { useEffect, useState } from 'react'
import { deleteBookById,getBooks } from '../../../services/api';
import {ENDPOINTS} from '../../../constants'
import { FaTrash } from "react-icons/fa";


const Products = () => {
  
  const [products,setProducts]=useState(null)
  const [isLoading,setIsLoading]=useState(true)
  const [error,setError]=useState(null)

  //1ci usul

  // const getProducts = async ()=>{
  //  try {
  //    const data =controller.getBooks(ENDPOINTS.PRODUCTS)
  //  } catch (error) {
  //   setError(error)
  //  }
  // }

  // useEffect(()=>{
  //   getProducts()
  // },[])

  const handleDelete =async(id) =>{
    try {
      await deleteBookById(ENDPOINTS.BOOKS,id)
        setProducts((prevProducts) => prevProducts.filter(product => product.id !== id))
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getBooks(ENDPOINTS.PRODUCTS).then((data)=>{
      setProducts(data)
    }).catch((err)=>{
      console.log(err)
      setError(err.message)
    }).finally(()=>{
      setIsLoading(false)
    })
  },[])

  if(isLoading){
    return(<div style={{fontSize:"3rem"}}>
      <p>Loading....</p>
    </div>)
  }

  if(error){
    return(<div style={{fontSize:"3rem"}}>
      <p>{error.message}</p>
    </div>)
  }

  return (
    <div>
     <h1>Porducts</h1>
     <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Price</th>
          <th>Description</th>
          <th>Photo</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          products && products.map((product)=>{
            return (<tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td><img width={100} src={product.image} alt={product.title} /></td>
              <td>
                <div onClick={()=>handleDelete(product.id)}>
                   <button><FaTrash style={{color:"red"}}  /></button>
                </div>
              </td>
            </tr>)
          })
        }
      </tbody>
     </table>
    </div>
  )
}

export default Products

