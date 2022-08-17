import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from './CartContext'




export default function Cart() {
  

const{cart, totalCount, totalToPay, removeItem} = useContext(myContext)




  return (
  <>
  {cart.map((item) =>( 
  <div key={item.id}>
  {item.nombre + ' ' + item.count}{' '} <button onClick={() =>removeItem(item.id)}>🗑️</button> 
  </div>
    
  ))}

  <div>
  Tienes en el carro {totalCount} items, total a pagar ${totalToPay}
  </div>
  <Link to ={'/Checkout'}>
    <button>FINALIZAR COMPRA</button>
  </Link>
  </>
  )
}
