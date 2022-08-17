import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { myContext } from './CartContext'


export default function Checkout() {

const{cart, totalToPay} = useContext(myContext)

const [name, setName] = useState('')
const [tel, setTel] = useState('')
const [email, setEmail] = useState('')

function validateForm(){
  const order ={
  buyer : {name, tel, email},
  totalToPay,
  cart
 }
 console.log(order)
  
}

  return (
    <div> Para terminar, ingrese sus datos 
      <br />
      <input type='text' placeholder='Name' className='border p-1' onChange={(e) => setName(e.target.value)}/>
      <input type='tel' placeholder='Tel' className='border p-1' onChange={(e) => setTel(e.target.value)}/>
      <input type='email' placeholder='Email' className='border p-1' onChange={(e) => setEmail(e.target.value)}/>
      <button onClick={validateForm} className='border p-1 m-2'>ENVIAR</button>
    </div>
  )
}
