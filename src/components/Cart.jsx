import React, { useContext } from 'react'
import { myContext } from './CartContext'




export default function Cart() {
  

const{cart, setCart} = useContext(myContext)


let arrayCarrito = []

  return (
    <div>
      {cart}
    </div>
  )
}
