import React, { useState } from 'react'



const ItemCount = ({stock}) => {

 const [contador, setContador] = useState(1)
 
 const [agregar, setAgregar] = useState(true)

function onAdd () {


  setContador(false)
  alert('Terminar mi compra')


}

  

 function resta(){
    setContador(contador - 1)
 }

function suma (){
    setContador(contador + 1 )
}

 

  return (
    <div className='flex border'>
        
    <div className='fila'>
    <button disabled ={contador === 1} onClick={resta} className='margin'>-</button>
    <h3 className='margin'>{contador}</h3>
    <button  onClick={suma} disabled={contador == stock} className='margin'>+</button>
    </div>
    
    <button className='botonCarrito border bg' onClick={onAdd}>Agregar al carrito</button>

    </div>
  )
}

export default ItemCount