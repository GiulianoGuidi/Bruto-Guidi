import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from './CartContext'



export default function Cart() {
  

const{cart, totalCount, totalToPay, removeItem, emptyCart, setEmptyCart, addToCart} = useContext(myContext)




if(cart.length == 0){
setEmptyCart(true)
}

  return (
  <>

  { emptyCart ?
  (
    <>
    <div className='flex justify-center m-12'>
    <div>
  <div className='text-xl text-slate-900 italic text-xl text-center pt-20 m-2'>TU CARRO ESTÁ VACÍO </div>
  <Link to={"/"}>
    <button className='border bg-red-300 rounded-xl p-2 ml-6 text-xl italic text-xl hover:bg-red-700'>Volver a la tienda</button>
  </Link>
  </div>
  </div>
   </>
  )

  :
  (
 <>
 <div className='flex justify-center pt-8 m-12'>
  <div className='border border-slate-900 p-2'>
 {   
 cart.map((item) =>( 
  <div key={item.id} className="italic text-xl flex flex-column p-2 m-2">
  <img src={item.img}  className='w-8 h-8 pr-2'/>
  {item.nombre + ' ' + item.count}{' '} <button onClick={() =>removeItem(item.id)} className="ml-6">🗑️</button> 
  </div>
    
  ))}

  <div className='italic text-xl'>
  Tienes en el carro {totalCount} items, total a pagar ${totalToPay}
  </div>
  <Link to ={'/Checkout'}>
    <button className='border bg-red-300 hover:bg-red-700 p-2 m-2 italic text-xl rounded-xl'>FINALIZAR COMPRA</button>
  </Link>
  </div>
  </div>
  </>
  
  )
  }
  
  </>
  )
}
