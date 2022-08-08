import React from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'







const Item = ({categoria, nombre, precio, img, stock, id}) => {

  return (
    <>
    
     <div className='bg-white-300 p-3 rounded-xl tt-g border-black'>
     <Link to={`/item/${id}`}>
      <button>Ver detalle</button>
    </Link>
     <img src={img} alt='' className='img' /> 
     <h5>{categoria}</h5>
     <p>{nombre}</p>
     <p>${precio}</p>
     <p>Stock disponible  {stock}</p>
     


     <ItemCount  />
     </div>
     </>
   
  
  
  )
}

export default Item