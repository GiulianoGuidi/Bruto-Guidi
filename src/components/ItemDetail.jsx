import React from 'react'




const ItemDetail = ({producto}) => {


  return (
    
    <div className='caja'>
    <img src={producto.img} alt='' className='img2' />
    <h2>{producto.nombre}</h2> 
    <p>${producto.precio}</p>
    <p>Stock disponible  {producto.stock}</p>
    </div>
    
  )
}

export default ItemDetail