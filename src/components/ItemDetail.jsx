import React from 'react'


const ItemDetail = ({box}) => {


  return (
    <div className='caja'>
    <img src={box.img} alt='' className='img2' />
    <h2>{box.nombre}</h2> 
    <p>{box.descripcion}</p>
    <p>${box.precio}</p>
    <p>Stock disponible  {box.stock}</p>
    </div>
  )
}

export default ItemDetail