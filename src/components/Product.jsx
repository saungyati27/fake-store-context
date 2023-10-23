import React from 'react'
import { useContextCustom } from '../context/StateContext';

const Product = (props) => {
    const {id,title,description,image,price}= props;
    const {dispatch}= useContextCustom()
  
  return (
    <div className=' w-72 p-[20px] h-96 rounded shadow shadow-teal-400'>
      <img src={image} className=' w-[200px] h-[200px]' alt="" />
      <div>
        <h1 className=' font-semibold'>{title}</h1>
        <p>{description.substring(0,30)}</p>
        <p>{price}</p>
        <div>
          <button onClick={()=>dispatch({type:"ADD_TO_CART",payload:props})}  className=' bg-teal-500 p-2 me-3'>Add to cart</button>
          <button className=' bg-teal-400 p-2 '>Detail</button>
        </div>
      </div>
    </div>
  )
}

export default Product
