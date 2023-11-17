import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import Cart from './components/Cart'
import Home from './components/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/categoria/:categoria' element={<ItemListContainer/>} />
        <Route exact path='/item/:id' element={<ItemDetailContainer/>} />
        <Route exact path='/cart' element={<Cart/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
