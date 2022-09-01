
import React, { useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from './CartContext'





const ItemCount = ({product}) => {

  const{cart, addToCart, setEmptyCart} = useContext(myContext)

 const [count, setCount] = useState(1)
 
 const [removeButton, setRemoveButton] = useState(false)



 function res(){
    setCount(count - 1)
 }

function sum (){
    setCount(count + 1 )
}

function onAdd(){

  addToCart(product, count)
  setRemoveButton(true)
  setEmptyCart(false)

}

 

  return (
    <>
     { removeButton ? (
      <>
      <div className='italic text-xl'>Producto agregado</div>
    <Link to ={'/'}>
      <button className='bg-pink-600 hover:bg-red-700 m-2 p-1 italic text-xl rounded-xl' >Seguir comprando</button>
    </Link>
    <Link to={'/Cart'}><button className='bg-pink-600 hover:bg-red-700 p-1 italic text-xl rounded-xl' >Finalizar compra</button> 
     </Link>
    
    </>
      ) : (
    <div>
    <div className='flex justify-center flex-row border-orange-200 border-2 rounded-xl m-2'>
    <button disabled ={count === 1} onClick={res} className='m-5 text-3xl italic  bg-orange-200 rounded-xl m-3 p-1'>-</button>
    <h3 className='m-5 text-xl italic'>{count}</h3>
    <button  onClick={sum} disabled={count == product.stock} className='m-5 text-2xl italic  bg-orange-200 rounded-xl m-3 p-1'>+</button>
    </div>
    <div className='bg-white-600 border-black border-2 hover:bg-orange-400 hover:text-white hover:border-white flex justify-center rounded-xl' >
    <button className='text-xl text-center italic' onClick={onAdd} >Agregar al carrito</button> 
    </div>
    </div>)
    } 
    </>
  )
    
}

export default ItemCount