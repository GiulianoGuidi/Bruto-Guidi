import React, { useEffect, useState } from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

const ItemListContainer = () => {

const [producto, setProducto] = useState([])

useEffect (() => {

  const mostrarProductos= () => {

   return new Promise((resolve, reject) => {

  setTimeout(() =>{
  setProducto(
  [
    {id: 1, categoria:"salado", nombre:"Pan de campo", precio: 410, img: "../assets/img/pandecampo.jpg", cantidad: 1},
    {id: 2, categoria:"salado", nombre:"Pan multicereal", precio: 450, img:"../assets/img/multi.jpg", cantidad: 1},
    {id: 3, categoria:"salado", nombre:"Pan de centeno", precio: 500, img:"../assets/img/pancenteno.jpg", cantidad: 1},
    {id: 4, categoria:"salado", nombre:"Chipa x 1/4", precio: 550, img:"../assets/img/chipa.jpg", cantidad: 1},
    {id: 5, categoria:"dulce",nombre:"Medialuna", precio: 110, img:"../assets/img/medialu.jpg", cantidad: 1},
    {id: 7, categoria:"dulce",nombre:"Alfajor de maicena", precio: 280, img:"../assets/img/alfajor.jpg", cantidad: 1},
    {id: 6, categoria:"dulce",nombre:"Croissant", precio: 200, img:"../assets/img/croissant.jpg", cantidad: 1},
    {id: 8, categoria:"dulce",nombre:"Porcion de torta", precio: 650, img:"../assets/img/torta.jpg", cantidad: 1},
    {id: 9, categoria:"pizza",nombre:"Pizza mozzarella", precio: 950, img:"../assets/img/pizzamusa.jpg", cantidad: 1},
    {id: 10, categoria:"pizza",nombre:"Pizza cuatro quesos", precio: 1200, img:"../assets/img/pizza4quesos.jpg", cantidad: 1},
    {id: 11, categoria:"pizza",nombre:"Pizza peperonni", precio: 1100, img:"../assets/img/pizzapepe.jpg", cantidad: 1},
    {id: 12, categoria:"pizza",nombre:"Pizza margarita", precio: 1100, img:"../assets/img/pizzamarga.jpeg", cantidad: 1}
    
])

resolve(producto)

},2000)
})
  }

  mostrarProductos(producto)

},[])



  return (
    
    <div className='bg-gray-100 p-4 m-5'>
   <ItemList producto = {producto} />
   </div>
    
  )
}


export default ItemListContainer