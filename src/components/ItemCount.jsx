import React, { useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from './CartContext'




const ItemCount = ({product}) => {

  const{cart, addToCart} = useContext(myContext)

 const [count, setCount] = useState(1)
 
 const [agregar, setAgregar] = useState(true)



 function res(){
    setCount(count - 1)
 }

function sum (){
    setCount(count + 1 )
}

function onAdd(){

  addToCart(product, count)

}

 

  return (
    <>
    { agregar ?
    <div className='flex border'>
        
    <div className='fila'>
    <button disabled ={count === 1} onClick={res} className='margin'>-</button>
    <h3 className='margin'>{count}</h3>
    <button  onClick={sum} disabled={count == product.stock} className='margin'>+</button>
    </div>
    <button className='bg-pink-600 hover:bg-red-700' onClick={() => setAgregar(false)} >Agregar al carrito</button>
    </div>
    :
    <Link to ={'/carrito'}>
    <button className='bg-pink-600 hover:bg-red-700' onClick={onAdd}> Terminar mi compra</button>
    </Link>
    }
    </>
  )
    
}

export default ItemCount