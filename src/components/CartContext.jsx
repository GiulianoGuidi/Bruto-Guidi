import React from 'react'
import { createContext, useState } from 'react' 
import { useEffect } from 'react'


export const myContext =createContext()

const CartContext = ({children}) => {


const [cart, setCart] = useState ([])
const [totalCount, setTotalCount] = useState (0)
const [totalToPay, setTotalToPay] = useState(0)



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

  useEffect(()=>{
    setTotalCount(cart.reduce((acc, product)=>acc + product.count, 0))
    setTotalToPay(cart.reduce((acc, product)=>acc + product.count * product.precio, 0))
  },[cart])
  

 function removeItem(id){
  setCart(cart.filter((item) => item.id != id))
  }

  
useEffect(() =>{
  console.log(cart)
},[cart])
 

  return (
    <>
    <myContext.Provider value={ {cart, addToCart, totalCount, totalToPay, removeItem } }>
    {children}
    </myContext.Provider>
    </>
  )
}

export default CartContext