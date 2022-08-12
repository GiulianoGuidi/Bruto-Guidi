import React, { createContext, useState } from 'react'


export const myContext =createContext()

const CartContext = ({children}) => {


const [cart, setCart] = useState ([])


function isInCart(id){
  let array = [...cart]
  const found = array.find(item => item.id === id)
  if(found){
    return true
  }else{
    return false
  }
}

  function addToCart(obj){
    if(isInCart(obj.id)){
      obj.cantidad++
    }else{
      cart.push(obj.id)
    }

  }


 

  return (
    <>
    <myContext.Provider value={{cart, setCart, addToCart}}>
    <div>{children}</div>
    </myContext.Provider>
    </>
  )
}

export default CartContext