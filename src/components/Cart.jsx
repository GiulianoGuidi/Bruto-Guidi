import React, { useContext } from 'react'
import { myContext } from './CartContext'




export default function Cart() {
  

const{cart, totalCount, totalToPay, removeItem} = useContext(myContext)




  return (
  <>
  {cart.map((item) =>{
    
  <div key={item.id}>
  {item.name + ' ' + item.count + <span onClick={() =>removeItem(item.id)}>🗑️</span> }
  </div>
    
   })}

  <div>
  Tienes en el carro {totalCount} items, total a pagar {totalToPay}
  </div>
    
  </>
  )
}
