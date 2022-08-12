import React from 'react'
import ItemCount from './ItemCount'




const ItemDetail = ({producto}) => {



  return (
    <>
    <div className='caja'>
    <img src={producto.img} alt='' className='img2' />
    <h2>{producto.nombre}</h2> 
    <p>${producto.precio}</p>
    <p>Stock disponible  {producto.stock}</p>

    <ItemCount stock ={producto.stock}/>
    </div>
     
     </>
  )
}

export default ItemDetail