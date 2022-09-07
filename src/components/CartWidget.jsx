import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from './CartContext'

const CartWidget = () => {
 
  const{totalCount} = useContext(myContext)


  return (
    <Link to={'/Cart'}>
    <div className='absolute top-4 right-0 p-4 m-4 flex'>
     <img src="../assets/img/shopping-bag.jpg" alt="cart" className='w-12 h-12'/>
  <p className='text-xl '>{totalCount}</p>
  </div>
  </Link>
  )
}

export default CartWidget