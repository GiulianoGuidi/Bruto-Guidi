import { useState } from 'react'

import './App.css'
import CartWidget from './components/CartWidget'
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'


function App() {

  

  return (
    <>
   <Navbar />
   <CartWidget />

   <ItemListContainer  />

 
   </>
  )
}

export default App
