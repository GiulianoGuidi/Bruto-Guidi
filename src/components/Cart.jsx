import React, { useContext } from 'react'
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
  <div className='text-xl text-slate-900 italic text-xl'>No hay elementos en el carrito </div>
  <Link to={"/"}>
    <button className='border bg-red-300 rounded-xl p-2 text-xl text-slate-900 italic text-xl hover:bg-red-700'>Volver a la tienda</button>
  </Link>
   </>
  )

  :
  (
 <>
 {   
 cart.map((item) =>( 
  <div key={item.id} className="italic text-xl">
  {item.nombre + ' ' + item.count}{' '} <button onClick={() =>removeItem(item.id)}>🗑️</button> 
  </div>
    
  ))}

  <div className='italic text-xl'>
  Tienes en el carro {totalCount} items, total a pagar ${totalToPay}
  </div>
  <Link to ={'/Checkout'}>
    <button className='border bg-red-300 p-2 italic text-xl rounded-xl'>FINALIZAR COMPRA</button>
  </Link>
  </>)
  }
  </>
  )
}
