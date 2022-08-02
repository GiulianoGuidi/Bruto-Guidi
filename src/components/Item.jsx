import React from 'react'
import ItemCount from './ItemCount'






const Item = ({categoria, nombre, precio, img, stock}) => {

  return (
   
     <div className='bg-blue-300 p-3 rouded-md text-lg'>
     <img src={img} alt='' className='img' /> 
     <h5>{categoria}</h5>
     <p>{nombre}</p>
     <p>${precio}</p>
     <p>Stock disponible  {stock}</p>
     


     <ItemCount  />

  </div>
   
  
  
  )
}

export default Item