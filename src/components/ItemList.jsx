import React from 'react'
import Item from './Item'



const ItemList = ({producto}) => {
  return (
    <div className='grid grid-cols-4 gap-4'>
   {
   producto.map((item) => 
    <Item key = {item.id} img = {item.img} categoria ={item.categoria} nombre = {item.nombre} precio = {item.precio} stock = {item.stock} />
   )}
    </div>
  )
}

export default ItemList