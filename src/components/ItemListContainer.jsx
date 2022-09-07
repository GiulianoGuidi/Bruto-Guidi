import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'

const ItemListContainer = () => {

const [productos, setProductos] = useState([])
const {categoria} = useParams();

useEffect (() => {
  const db = getFirestore()
  let myCollection;

  if(categoria == undefined){

 myCollection = collection(db, 'products')
}
else{
     myCollection = query(
      collection(db, 'products'),
      where("categoria", "==", categoria)
     )
    }
    getDocs(myCollection).then((data) =>{

      myCollection = collection(db, 'products')
      const auxProducts = data.docs.map((products) => ({
        id:products.id, ...products.data()
      }))
  
    setProductos(auxProducts)
      
     })
    },[categoria])



  return (
   
    
    <div className='bg-gray-100 p-4 m-5'>
      
   {productos.length ? <ItemList productos = {productos} /> : <p className='italic text-xl'>Cargando...</p> }
   </div>
   
    
  )
}


export default ItemListContainer