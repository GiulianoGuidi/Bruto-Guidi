import { Button } from 'bootstrap'
import React, { useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from './CartContext'




const ItemCount = ({product}) => {

  const{cart, addToCart} = useContext(myContext)

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

}

 

  return (
    <>
     { removeButton ? (
      <>
      <div>Producto agregado</div>
    <Link to ={'/'}>
      <button className='bg-pink-600 hover:bg-red-700 m-2 p-1' >Seguir comprando</button>
    </Link>
    <Link to={'/Checkout'}><button className='bg-pink-600 hover:bg-red-700 p-1' >Finalizar compra</button> 
     </Link>
    
    </>
      ) : (
    <div className='flex border'>
    <div className='fila'>
    <button disabled ={count === 1} onClick={res} className='margin'>-</button>
    <h3 className='margin'>{count}</h3>
    <button  onClick={sum} disabled={count == product.stock} className='margin'>+</button>
    </div>
    <button className='bg-pink-600 hover:bg-red-700' onClick={onAdd} >Agregar al carrito</button> 
    
    </div>)
    } 
    </>
  )
    
}

export default ItemCount