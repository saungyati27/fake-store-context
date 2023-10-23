import React, { useEffect, useState } from 'react'
import { useContextCustom } from '../context/StateContext'
import CartDetail from './CartDetail';

const Cart = () => {
    const {state:{cart}}= useContextCustom()
    const [mainTotal,setMainTotal]= useState(0)

    useEffect(() => {
        setMainTotal(total)
    },[])  
    //cart ထဲမှာ 1 item price တွေကို အရင် ပေါင်းထည့်ပေးရတာ
    
    const increaseTotal=(price)=>{
        setMainTotal(price+mainTotal)
    }
    const decreaseTotal=(price)=>{
        setMainTotal(mainTotal-price)
    }

    const total=()=>cart?.reduce((pv,cv)=>pv+cv.price,0)
  return (
    <div>
    {cart?.map(ct=>{
        return(
            <CartDetail key={ct.id} item={ct} increaseTotal={increaseTotal} decreaseTotal={decreaseTotal}/>
        )
    })}
    <div>
        <hr  className=' text-xl shadow text-center'/>
        <div className=' flex justify-around'>
            <p>Total</p>
            <p className=' ms-[600px] text-2xl'>{mainTotal.toFixed(2)}</p>
        </div>
    </div>
    </div>

  )
}

export default Cart


// const Cart=()=>{
//     const {state:{cart}}= useContextCustom()
//     const [mainTotal,setMainTotal]= useState(0)
    
//     useEffect(() => {
//         setMainTotal(total)
//     },[])//

//     const increaseTotal=(price)=>{
//         setMainTotal(price+mainTotal)
//     }

//     const decreaseTotal=(price)=>{
//         setMainTotal(mainTotal-price)
//     }
//     const total=()=>cart?.reduce((pv,cv)=>cv.price+pv,0)

//     return(
//         <div>
//             {cart?.map(ct=>{
//                 return(
//                     <CartDetail key={ct.id} item={ct} increaseTotal={increaseTotal} decreaseTotal={decreaseTotal}/>
//                 )
//             })}
//              <hr  className=' text-xl shadow text-center'/>
//         <div className=' flex justify-around'>
//             <p>Total</p>
//             <p className=' ms-[600px] text-2xl'>
//                 {mainTotal}
//             </p>
//         </div>
//         </div>
//     )
// }

// export default Cart
