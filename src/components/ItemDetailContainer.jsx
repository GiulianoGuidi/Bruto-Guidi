import React from 'react'
import { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail'



const ItemDetailContainer = () => {

  const [producto, setProducto] = useState({})
  const {id} = useParams();
  
  useEffect (() => {

  
  
    const productohardcore =
    [
      {id: 1, categoria:"salado", nombre:"Pan de campo", precio: 410, img: "../assets/img/pandecampo.jpg", stock: 5},
      {id: 2, categoria:"salado", nombre:"Pan multicereal", precio: 450, img:"../assets/img/multi.jpg", stock: 6},
      {id: 3, categoria:"salado", nombre:"Pan de centeno", precio: 500, img:"../assets/img/pancenteno.jpg", stock: 2},
      {id: 4, categoria:"salado", nombre:"Chipa x 1/4", precio: 550, img:"../assets/img/chipa.jpg", stock: 4},
      {id: 5, categoria:"dulce",nombre:"Medialuna", precio: 110, img:"../assets/img/medialu.jpg", stock: 7},
      {id: 7, categoria:"dulce",nombre:"Alfajor de maicena", precio: 280, img:"../assets/img/alfajor.jpg", stock: 3},
      {id: 6, categoria:"dulce",nombre:"Croissant", precio: 200, img:"../assets/img/croissant.jpg", stock: 8},
      {id: 8, categoria:"dulce",nombre:"Porcion de torta", precio: 650, img:"../assets/img/torta.jpg", stock: 2},
      {id: 9, categoria:"pizza",nombre:"Prepizza mozzarella", precio: 950, img:"../assets/img/pizzamusa.jpg", stock: 5},
      {id: 10, categoria:"pizza",nombre:"Prepizza cuatro quesos", precio: 1200, img:"../assets/img/pizza4quesos.jpg", stock: 2},
      {id: 11, categoria:"pizza",nombre:"Prepizza peperonni", precio: 1100, img:"../assets/img/pizzapepe.jpg", stock: 7},
      {id: 12, categoria:"pizza",nombre:"Prepizza margarita", precio: 1100, img:"../assets/img/pizzamarga.jpeg", stock: 3}
      
  ]
  
  const mostrarProductos = new Promise((res, rej) => {
  
    setTimeout(() =>{
    
        res(productohardcore.find((prod) => prod.id == id))
      

    },1000)
  })
  mostrarProductos.then((res) =>{
    setProducto(res)
  })



  },[id])


  return (
    <>
     {id.length ? <ItemDetail producto = {producto} /> : <p>Cargando...</p> }
    </>
  )
}

export default ItemDetailContainer