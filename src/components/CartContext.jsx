import React from 'react'
import { createContext, useState } from 'react' 
import { useEffect } from 'react'

export const myContext =createContext()

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')

const CartContext = ({children}) => {




const [cart, setCart] = useState (cartFromLocalStorage)
const [totalCount, setTotalCount] = useState(0)
const [totalToPay, setTotalToPay] = useState(0)
const [emptyCart, setEmptyCart] = useState()


useEffect(() =>{
  localStorage.setItem('cart', JSON.stringify(cart))
},[cart])


  function addToCart(product, count){

  const cartAux = [...cart] 
  let found = false
  
  for (let i = 0; i < cartAux.length; i++ ){
    if(cartAux[i].id == product.id){
      cartAux[i].count = cartAux[i].count + count
      found = true
      
    }
  }if(!found){
    cartAux.push({...product, count})
  }
  
   setCart(cartAux)

   
   
  }


  useEffect(()=>{
    setTotalCount(cart.reduce((acc, product)=>acc + product.count, 0))
    setTotalToPay(cart.reduce((acc, product)=>acc + product.count * product.precio, 0))

  
  },[cart])
  

 function removeItem(id){
  setCart(cart.filter(product => product.id != id))

 
  }

function deleteCart(){
setCart([])
}

  

 

  return (
    <>
    <myContext.Provider value={ {cart, addToCart, totalCount, totalToPay, removeItem, emptyCart, setEmptyCart, deleteCart } }>
    {children}
    </myContext.Provider>
    </>
  )
}

export default CartContext