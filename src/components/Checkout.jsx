import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { myContext } from './CartContext'
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import { Link } from 'react-router-dom'


export default function Checkout() {

const{cart, totalToPay, deleteCart} = useContext(myContext)

const [name, setName] = useState('')
const [tel, setTel] = useState('')
const [email, setEmail] = useState('')
const [orderId, setOrderId] = useState('')

function validateForm(){
  const order ={
  buyer : {name, tel, email},
  totalToPay,
  cart
 }
 
 const db = getFirestore()
 const orders = collection(db, 'orders')
 addDoc(orders, order).then(({id}) =>{
  setOrderId(id)
  deleteCart()
}) 
}

if (cart.length == 0) {
  return  <><div>No tienes productos a pagar</div> <Link to={'/'} className='border bg-red-300'>Ir a home</Link></>  
} 

  return (
    <>
  {orderId ? ("Muchas gracias por su compra!, el id de tu orden es : " + '' + orderId)
   :(
    <div> Para terminar, ingrese sus datos 
      <br />
      <input type='text' placeholder='Name' className='border p-1' onChange={(e) => setName(e.target.value)}/>

      <input type='tel' placeholder='Tel' className='border p-1' onChange={(e) => setTel(e.target.value)}/>

      <input type='email' placeholder='Email' className='border p-1' onChange={(e) => setEmail(e.target.value)}/>
      <button onClick={validateForm} className='border p-1 m-2'>ENVIAR</button>
    </div>
   )
  }
  </>
  )
}
