import './App.css'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart'
import CartContext from './components/CartContext'
import Checkout from './components/Checkout'
import Footer from './components/Footer'
import NuestrosPanes from './components/NuestrosPanes'


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
   <Route path='/Cart' element= {<Cart />} />
   <Route path='/NuestrosPanes' element={<NuestrosPanes />} />
   <Route path='/Checkout' element= {<Checkout />} />
   

   </Routes>
   <Footer />
  </BrowserRouter>
  </CartContext>
  
   </>
  )
}

export default App
