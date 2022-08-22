import React from 'react'
import Item from './Item'



const ItemList = ({productos}) => {
  return (
    <div className='grid grid-cols-4 gap-4'>
   {
   productos.map((product) => 
    <Item key={product.id} product = {product}  />
   )}
    </div>
  )
}

export default ItemList