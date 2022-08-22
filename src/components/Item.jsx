import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product}) => {

  return (
    <>
    
     <div className='bg-white-300 p-3 rounded-xl tt-g'>
     <Link to={`/item/${product.id}`}>
      <button>Ver detalle</button>
    </Link>
     <img src={product.img} alt='' className='img' /> 
     <h5>{product.categoria}</h5>
     <p>{product.nombre}</p>
     <p>${product.precio}</p>
     <p>Stock disponible  {product.stock}</p>

     
     </div>
     </>
   
  
  
  )
}

export default Item