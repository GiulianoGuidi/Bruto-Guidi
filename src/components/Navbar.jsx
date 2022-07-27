import React from 'react'
import CartWidget from './CartWidget'

const Navbar = () => {

 
  return (
    <div className='Navbar_menu'>
      
        <button className='Navbar_button m-2'>Menú</button>
        <button className='Navbar_button m-2'>Productos</button>
        <button className='Navbar_button m-2'>Sobre Nosotros</button>
        <button className='Navbar_button m-2'>Contacto</button>
        
        <CartWidget />
        
    
        
    </div>
  )
} 

export default Navbar