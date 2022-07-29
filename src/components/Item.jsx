import React from 'react'
import ItemCount from './ItemCount'




const Item = ({categoria, nombre, precio, img}) => {

  return (
   
     <div className='bg-blue-300 p-3 rouded-md text-lg'>
     <img src='{img}' alt='' className='img' /> 
     <h5>Categoria : {categoria}</h5>
     <p>Nombre : {nombre}</p>
     <p>Precio : ${precio}</p>

     <ItemCount  />

  </div>
   
  
  
  )
}

export default Item