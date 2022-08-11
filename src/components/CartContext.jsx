import React from 'react'
import { useParams } from 'react-router-dom'


export default function CartContext() {
const {carrito} = useParams()

  return (
    <div>{carrito}</div>
  )
}
