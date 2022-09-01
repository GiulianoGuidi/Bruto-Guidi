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
    
     <div className='bg-white-300 p-3 rounded-xl tt-g'>
     <Link to={`/item/${product.id}`}>
      <button className='italic text-xl'>Ver detalle</button>
    </Link>
     <img src={product.img} alt='' className='w-60 h-60 rounded-xl' /> 
     
     <p className='italic text-xl'>{product.nombre}</p>
     <p className='italic text-xl'>${product.precio}</p>

     <div className='bg-white-600 border-black border-2 hover:bg-orange-400 hover:text-white hover:border-white flex justify-center rounded-xl w-60' >
    <button className='text-xl text-center italic' onClick={onAdd} >Añadir al carrito</button> 
    </div>
     

     
     </div>
     </>
   
  
  
  )
}

export default Item