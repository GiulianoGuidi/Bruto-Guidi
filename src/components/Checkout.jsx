import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { myContext } from './CartContext'
import {addDoc, collection, getFirestore} from 'firebase/firestore'



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

/*if (cart.length == 0) {
  
  return  <><div className='italic text-xl'>No tienes productos a pagar</div> 
  <Link to={'/'} ><button className='border bg-red-300 rounded-xl italic text-xl hover:bg-red-700 p-2'>Volver a la tienda</button></Link>
  </>  
} */

  return (
    <>
  {orderId ? ("Muchas gracias por su compra!, el id de su pedido es : " + '' + orderId)
   :(
    <>
    <div className='mt-1 block w-full px-3 py-2 ml-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 max-w-md'>
    <div className='italic text-xl p-2 m-2'> Para terminar, ingrese sus datos: </div>
      
    <form>
    <label className="block">

    <span className="block text-lg text-slate-700">Name</span>
    <input type='text' placeholder='Name' className='border-2 p-1 w-64 rounded ring-1 placeholder-slate-400' onChange={(e) => setName(e.target.value)}/>
      
    <span className="block text-lg text-slate-700">Tel</span>
    <input type='number' placeholder='Tel' className='border-2 p-1 w-64 rounded ring-1' onChange={(e) => setTel(e.target.value)}/>
      
    <span className="block text-lg text-slate-700">Email</span>
    <input type="email" className="peer border-2 p-1 w-64 rounded ring-1" placeholder='Email'  onChange={(e) => setEmail(e.target.value)} />
    <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid email address.
    </p>
  </label>
</form>
      <button onClick={validateForm} className='border-black border-2 rounded-lg hover:bg-black hover:text-white p-1 m-2 italic text-xl'>ENVIAR</button>
</div>
      
    </>
   )
  }
  </>
  )
}
