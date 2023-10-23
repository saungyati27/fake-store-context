import React, { useState } from 'react'
import { useContextCustom } from '../context/StateContext'

const CartDetail = ({item,increaseTotal,decreaseTotal}) => {
    
    
    const [quantity,setQuantity]= useState(1)
    const {dispatch}= useContextCustom()

    const increaseQty=()=>{
        setQuantity(quantity+1);
        increaseTotal(item.price)
    }

    const decreaseQty=()=>{
        if(quantity>1){
            setQuantity(quantity-1)
            decreaseTotal(item.price)
        }
    }

    const removeTotal=()=>{
        dispatch({type:"REMOVE_FROM_CART",payload:item})
        decreaseTotal(OneItemPrice)
    }



    const OneItemPrice= quantity* item.price;
  return (
<div>
<div className=' flex justify-around m-9 h-56 items-center' >
      <img src={item?.image} className=' w-40' alt="" />
      <div className=' flex flex-col text-xl'>
        <p>{item?.title}</p>
        <p className=' font-semibold'>{OneItemPrice.toFixed(2)}</p>
        <p onClick={removeTotal} className=' text-red-500 cursor-pointer'>remove</p>

      </div>
      <div className=' text-3xl cursor-pointer select-none'>
        <p onClick={increaseQty}>+</p>
        <p>{quantity}</p>
        <p onClick={decreaseQty}>-</p>
      </div>
    </div>

</div>

   
  )
}

export default CartDetail


// const CartDetail=({item,increaseTotal,decreaseTotal})=>{
//   const {dispatch}= useContextCustom()
//   const [quantity,setQuantity]= useState(1)

//   const increaseQty=()=>{
//     setQuantity(quantity+1)
//     increaseTotal(item.price)
//   }

//   const decreaseQty=()=>{
//    if(quantity>1){
//     setQuantity(quantity-1)
//     decreaseTotal(item.price)
//    }
//   }
//   const removeBtn=()=>{
//     dispatch({type:"REMOVE_FROM_CART",payload:item})
//     decreaseTotal(oneItemPrice)
//   }
  

//   const oneItemPrice= quantity* item.price;
//   return(
//     <div>
//       <div className=' flex justify-around m-9 h-56 items-center' >
//      <img src={item?.image} className=' w-40' alt="" />
//      <div className=' flex flex-col'>
//       <p>{item?.title}</p>
//         <p className=' font-semibold'>{oneItemPrice}</p>
//        <p onClick={removeBtn}  className=' text-red-500 cursor-pointer'>remove</p>

//        </div>
//        <div className=' text-3xl cursor-pointer select-none'>
//         <p onClick={increaseQty}>+</p>
//          <p>{quantity}</p>
//          <p onClick={decreaseQty}>-</p>
//      </div>
//     </div>
//     </div>
//   )
// }

// export default CartDetail
