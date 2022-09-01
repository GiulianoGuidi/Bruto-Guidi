import React from 'react'
import CartWidget from './CartWidget'
import {Link} from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {

 
  return (
    <>
    
    <div className='container bg-orange-400 mx-auto p-10 flex justify-center'>
        
      <Logo />
        
        
        <Link to = {'/'} className='bg-red-100 rounded-xl m-4 p-2 italic'> Home </Link> 
        
        <Link to = {'/categorias/dulce'} className='bg-red-100 rounded-xl m-4 p-2 italic'>Dulce</Link>

        <Link to = {'/categorias/salado'} className='bg-red-100 rounded-xl m-4 p-2 italic'>Salado</Link>

        <Link to = {'/categorias/pizza'} className='bg-red-100 rounded-xl m-4 p-2 italic'>Pizza</Link>

        <Link to ={'NuestrosPanes'} className="bg-red-100 rounded-xl m-4 p-2 italic">Nuestros panes</Link>

        
        
       
    </div>
    
    <CartWidget /> 
  
    </>
  )
} 

export default Navbar