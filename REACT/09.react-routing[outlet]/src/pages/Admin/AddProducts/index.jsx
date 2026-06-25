import { useState } from "react"
import {addNewBook} from '../../../services/api'
import { ENDPOINTS } from "../../../constants"

const AddProducts = () => {
  const [product,setProduct]=useState({
    title:"",
    price:0,
    description:""
  })
  const handleSubmit =async(e)=>{
    e.preventDefault()
    console.log(product)

     await addNewBook(ENDPOINTS.BOOKS,product)
  }
  return (
    <div>
     <form onSubmit={handleSubmit}>     {/*inputun value-ni saxlamaq ucun "onChange" den istifade olunur */}
        <label htmlFor="name">Product Name:</label>
        <input type="text" name="name" id="name" value={product.title} onChange={(e)=>{
          setProduct({...product,title:e.target.value})
        }}/>
        <hr />
        <label htmlFor="price">Product Price:</label>
        <input type="number" name="name" id="price" value={product.price} onChange={(e)=>{
          setProduct({...product,price:e.target.value})
        }}/>
        <hr />
        <label htmlFor="desc">Product Description:</label>
        <input type="text" name="name" id="desc" value={product.description} onChange={(e)=>{
          setProduct({...product,description:e.target.value})
        }}/>
        <hr />
        <input type="submit" />
      </form>
    </div>
  )
}

export default AddProducts
