import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { myContext } from './CartContext'
import { useState } from 'react'

const Item = ({product}) => {

  const{addToCart, setEmptyCart} = useContext(myContext)

  const [count, setCount] = useState(1)

  function onAdd(){
    addToCart(product, count)
    setEmptyCart(false)
  }

  return (
    <>
    
     <div className='bg-white-300 p-3 rounded-xl tt-g border border-slate-800 w-80'>
    
     <img src={product.img} alt='' className='w-80 h-80 rounded-xl' /> 
     
     <p className='italic text-xl'>{product.nombre}</p>
     <p className='italic text-xl'>${product.precio}</p>

     <Link to={`/item/${product.id}`}>
      <div className='flex justify-center'>
      <button className='italic text-xl bg-white-600 border-black border-2 hover:bg-orange-400 hover:text-white hover:border-white rounded-xl p-1'>
        Ver detalle de producto</button>
      </div>
    </Link>
     
     </div>
     
     </>
   
  
  
  )
}

export default Item