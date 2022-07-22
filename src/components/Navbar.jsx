import React from 'react'
import CartWidget from './CartWidget'

const Navbar = () => {

 
  return (
    <div className='Navbar_menu'>

        <button className='Navbar_button'>Menú</button>
        <button className='Navbar_button'>Productos</button>
        <button className='Navbar_button'>Sobre Nosotros</button>
        <button className='Navbar_button'>Contacto</button>

        <CartWidget />
        
    
        
    </div>
  )
} 

export default Navbar