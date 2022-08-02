import React from 'react'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'


const ItemDetailContainer = () => {

 const [box, setBox] = useState({})

    useEffect (() => {
    
      const boxhardcore =
      {id: 1,
       img: "../assets/img/imagenbrutobox.jpg",    
       nombre: 'Box Familiar', 
       descripcion: "2 ciabattas - 2 foccacias - 1 pan de campo - 3 prepizzas - 2 baguettes rusticas", 
       precio: 3500, 
       categoria: "box", 
       stock: 4}
    
    
    const mostrarBox= new Promise((res, rej) => {
    
      setTimeout(() => {
        res(boxhardcore)
      },2000);
    })
    mostrarBox.then((res) =>{
      setBox(res)
    })
    },[])


  return (
    <div>
        <ItemDetail box = {box}/>
    </div>
  )
}

export default ItemDetailContainer