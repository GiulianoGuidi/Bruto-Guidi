import React from 'react'
import CartWidget from './CartWidget'
import {Link} from 'react-router-dom';

const Navbar = () => {

 
  return (
    <div className='Navbar_menu'>
      
        <Link to = {'/'} className='Navbar_button'> Home </Link> 
        <Link to = {'/categorias/salado'} className='Navbar_button'>Salado</Link>
        <Link to = {'/categorias/dulce'} className='Navbar_button'>Dulce</Link>
        <Link to = {'/categorias/pizza'} className='Navbar_button'>Pizza</Link>
        
        <CartWidget />
        
    
        
    </div>
  )
} 

export default Navbar