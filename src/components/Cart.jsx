import React, { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from './CartContext'




export default function Cart() {
  

const{cart, totalCount, totalToPay, removeItem, emptyCart, setEmptyCart} = useContext(myContext)


if(cart == 0){
setEmptyCart(true)
}



  return (
  <>

  { emptyCart ?
  (
    <>
  <div>No hay elementos en el carrito </div>
  <Link to={"/"}>
    <button className='border bg-red-300'>Ir a home</button>
  </Link>
   </>
  )

  :
  (
 <>
 {   
 cart.map((item) =>( 
  <div key={item.id}>
  {item.nombre + ' ' + item.count}{' '} <button onClick={() =>removeItem(item.id)}>🗑️</button> 
  </div>
    
  ))}

  <div>
  Tienes en el carro {totalCount} items, total a pagar ${totalToPay}
  </div>
  <Link to ={'/Checkout'}>
    <button className='border bg-red-300 p-2'>FINALIZAR COMPRA</button>
  </Link>
  </>)
  }
  </>
  )
}
