import React from 'react'
import { createContext, useState } from 'react' 
import { useEffect } from 'react'


export const myContext =createContext()

const CartContext = ({children}) => {


let [cart, setCart] = useState ([])
const [totalCount, setTotalCount] = useState (0)
const [totalToPay, setTotalToPay] = useState(0)
const [emptyCart, setEmptyCart] = useState(true)

useEffect(()=>{
document.addEventListener('DOMContentLoaded', () =>{

  console.log(localStorage)
  
  if(localStorage.getItem('cart')){
      cart = JSON.parse(localStorage.getItem('cart'))
    }else{
      localStorage.setItem('cart', JSON.stringify(cart))
    }

  })
},[])

  localStorage.setItem('cart', JSON.stringify(cart))

console.log(cart)

  function addToCart(product, count){

  const copiaCart = [...cart] 
  let found = false
  
  for (let i = 0; i < copiaCart.length; i++ ){
    if(copiaCart[i].id == product.id){
      copiaCart[i].count = copiaCart[i].count + count
      found = true
      
    }
  }if(!found){
    copiaCart.push({...product, count})
  }
  
   setCart(copiaCart)

   
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