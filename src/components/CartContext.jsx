import React from 'react'
import { createContext, useState } from 'react' 
import { useEffect } from 'react'


export const myContext =createContext()

const CartContext = ({children}) => {


const [cart, setCart] = useState ([])



  function addToCart(product, count){

  const copiaCart = [...cart] 
  let found = false
  
  for (let i = 0; i < copiaCart.length; i++ ){
    if(copiaCart.id == product.id){
      copiaCart[i].count += count
      found = true
    }
  }
  if(!found){
    copiaCart.push({...product, count})
  }
   setCart(copiaCart)
  }
  useEffect (()=>{
    console.log(cart)
  },[cart])


 

  return (
    <>
    <myContext.Provider value={ {cart, addToCart } }>
    {children}
    </myContext.Provider>
    </>
  )
}

export default CartContext