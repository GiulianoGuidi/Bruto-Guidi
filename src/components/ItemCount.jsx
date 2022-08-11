import React, { useState } from 'react'
import { Link } from 'react-router-dom'




const ItemCount = ({stock}) => {

 const [contador, setContador] = useState(1)
 
 const [agregar, setAgregar] = useState(true)







 function resta(){
    setContador(contador - 1)
 }

function suma (){
    setContador(contador + 1 )
}

 

  return (
    <>
    { agregar ?
    <div className='flex border'>
        
    <div className='fila'>
    <button disabled ={contador === 1} onClick={resta} className='margin'>-</button>
    <h3 className='margin'>{contador}</h3>
    <button  onClick={suma} disabled={contador == stock} className='margin'>+</button>
    </div>
    <button className='bg-pink-600 hover:bg-red-700' onClick={() => setAgregar(false)} >Agregar al carrito</button>
    </div>
    :
    <Link to ={'/carrito/carrito'}>
    <button className='bg-pink-600 hover:bg-red-700'> Terminar mi compra</button>
    </Link>
    }
    </>
  )
    
}

export default ItemCount