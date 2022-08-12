import './App.css'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart'
import CartContext from './components/CartContext'


function App() {

  

  return (
    <>
    <CartContext>
    <BrowserRouter>
   <Navbar />
   <Routes>
   <Route path='/' element= {<ItemListContainer />} />
   <Route path= '/categorias/:categoria' element= {<ItemListContainer />} />
   <Route path='/item/:id' element= {<ItemDetailContainer />} />
   <Route path='/carrito' element= {<Cart />} />

   </Routes>
  </BrowserRouter>
  </CartContext>
  
   </>
  )
}

export default App
