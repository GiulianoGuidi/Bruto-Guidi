import React from 'react'
import CartWidget from './CartWidget'
import {Link} from 'react-router-dom';

const Navbar = () => {

 
  return (
    <>
    <div className='bg-orange-500'>
      
        <Link to = {'/'} className='rounded-xl p-2 m-2 text-lg bg-sky-600 hover:bg-sky-700'> Home </Link> 
        <div className='Navbar_button_cat'>
        <Link to = {'/categorias/dulce'} className='bg-red-100 rounded-xl p-2 m-2'>Dulce</Link>

        <Link to = {'/categorias/salado'} className='bg-red-100 rounded-xl p-2 m-2'>Salado</Link>

        <Link to = {'/categorias/pizza'} className='bg-red-100 rounded-xl p-2 m-2'>Pizza</Link>

        <Link to ={'Checkout'} className="bg-red-100 rounded-xl p-2 m-2">Checkout</Link>
        </div>
         
    </div>
    <CartWidget /> 
    </>
  )
} 

export default Navbar