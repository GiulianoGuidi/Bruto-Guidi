import './App.css'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  

  return (
    <>
    <BrowserRouter>
   <Navbar />
   <Routes>
   <Route path='/' element= {<ItemListContainer />} />
   <Route path= '/categorias/:categoria' element= {<ItemListContainer />} />
   <Route path='/item/:id' element= {<ItemDetailContainer />} />

   </Routes>

   
 
  
  </BrowserRouter>
   </>
  )
}

export default App
