import React, { useState } from 'react'

const ItemCount = (props) => {

 const [contador, setContador] = useState(1)

 props.stock 

 function resta(){
    setContador(contador - 1)
 }

function suma (){
    setContador(contador + 1 )
}

 

  return (
    <div className='flex  border'>
        
        
    <button disabled ={contador === 1} onClick={resta} className='margin'>-</button>
    <h3 className='margin'>{contador}</h3>
    <button disabled = {contador == (props.stock)} onClick={suma} className='margin'>+</button>
    <button className='botonCarrito'>Agregar al carrito</button>

    </div>
  )
}

export default ItemCount