import React, { useState } from 'react'
import { useContextCustom } from '../context/StateContext'
import { Link } from 'react-router-dom'

const Navbar = () => {
   const {search,setSearch,state:{cart}}= useContextCustom()
  
   
  return (
    <div className=' mb-10 shadow p-4 flex justify-around'>
      <h1>My Shop</h1>
      <div className=' flex'>
      <input onChange={(e)=>setSearch(e.target.value)} type="text" className=' bg-teal-200' />
        <Link to={'/cart'}>
        <p className=' rounded-[100%] w-9 h-9 bg-teal-600 text-2xl text-white'>{cart.length}</p>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
