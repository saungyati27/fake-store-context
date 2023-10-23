import React from 'react'
import { Route, Routes } from 'react-router'
import Products from './components/Products'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
// import Cart from './components/Cart'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Products/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </div>
  )
}

export default App
