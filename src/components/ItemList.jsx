import React from 'react'
import Item from './Item'



const ItemList = ({productos}) => {
  return (
    
    <div className='grid justify-items-center grid-cols-3 gap-2'>
    
   {
   productos.map((product) => 
    <Item key={product.id} product = {product}  />
   )}
   
    </div>
    
  )
}

export default ItemList