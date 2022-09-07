import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { myContext } from './CartContext'
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import { Formik, Form } from 'formik'



export default function Checkout() {

const{cart, totalToPay, deleteCart} = useContext(myContext)

const [name, setName] = useState('')
const [lastName, setLastName] = useState('')
const [email, setEmail] = useState('')
const [orderId, setOrderId] = useState('')





  return (
    <>
  {orderId ? (<> <div className='flex justify-center italic text-xl pt-8 pb-8'>Muchas gracias por su compra!</div> 
  <div className='flex justify-center italic text-xl pt-8 pb-8'> el id de su pedido es: {orderId}</div></> )
   :(
    <>
    <div className='flex justify-center p-4'>
    <div className='mt-1 block w-full px-3 py-2 ml-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 max-w-md'>
    <div className='italic text-xl p-2 m-2'> Para terminar, ingrese sus datos: </div>
      
    <Formik 

    validate={(valores) =>{

      let errores = {};

    if(!valores.nombre){
      errores.nombre= "Por favor ingrese un nombre"
    }
    else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
    errores.nombre= 'El nombre solo puede contener letras y espacios'
    }

    if(!valores.apellido){
      errores.apellido= "Por favor ingrese un apellido"
    }
    else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)){
    errores.apellido= 'El apellido solo puede contener letras y espacios'
    }

    if(!valores.mail){
      errores.mail= "Por favor ingrese un mail"
    }
    else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.mail)){
    errores.mail= 'El mail debe ser válido'
    }

    return errores;

    }}
    
    initialValues={{
      nombre: "",
      apellido:"",
      mail: ""

    }}
    
    onSubmit={(valores, {resetForm}) =>{

      resetForm()

      const order ={
        buyer : {name, lastName, email},
        totalToPay,
        cart
       }
       
       const db = getFirestore()
       const orders = collection(db, 'orders')
       addDoc(orders, order).then(({id}) =>{
        setOrderId(id)
        deleteCart()
      })

     
       
      
    }}>
    {({values, handleChange, handleBlur, errors, touched, onSubmit}) => (

    <Form className='grid grid-cols-1'>

    <label htmlFor='nombre'>Nombre</label>
    <input 
    className='border border-black p-2 rounded-xl'
    type="text" 
    id='nombre' 
    placeholder='Giuliano' 
    value={setName(values.nombre)}
    onChange={handleChange}
    onBlur={handleBlur}
    >
    </input>
    {touched.nombre && errors.nombre && <div className='text-red-700'>{errors.nombre}</div>}

    <label htmlFor='apellido'>Apellido</label>
    <input 
    className='border border-black p-2 rounded-xl'
    type="text" 
    id='apellido' 
    placeholder='Guidi' 
    value={setLastName(values.apellido)}
    onChange={handleChange}
    onBlur={handleBlur}
    > 
    </input>
    {touched.apellido && errors.apellido && <div className='text-red-700'>{errors.apellido}</div>}

    <label htmlFor='mail'>Mail</label>
    <input 
    className='border border-black p-2 rounded-xl'
    type="mail" 
    id='mail' 
    placeholder='correo@correo.com' 
    value={setEmail(values.mail)}
    onChange={handleChange}
    onBlur={handleBlur}
    >
    </input>
    {touched.mail && errors.mail && <div className='text-red-700'>{errors.mail}</div>}

    <button type='submit' onClick={onSubmit} 
    className='border-black border-2 rounded-lg hover:bg-black hover:text-white p-1 m-2 italic text-xl'>
    Enviar</button>

    </Form>
      )}
    </Formik>
     
</div>
</div>
    </>
   )
  }
  </>
  )
}
