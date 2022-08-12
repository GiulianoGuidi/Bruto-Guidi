import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { myContext } from './CartContext'




export default function Cart() {
  const {carrito} = useParams()

const{cart, setCart, addToCart} = useContext(myContext)


let arrayCarrito = []

  return (
    <div>
      {cart}
    </div>
  )
}
