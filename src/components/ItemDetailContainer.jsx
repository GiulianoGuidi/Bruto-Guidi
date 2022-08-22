import React from 'react'
import { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail'
import {doc, getDoc, getFirestore } from 'firebase/firestore'



const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})
  const {id} = useParams();
  
  useEffect (() => {
    const db = getFirestore()
    const refDoc = doc(db, "products", id)
  
  
      getDoc(refDoc).then((item) =>{
  
        const auxProduct = {
          id:item.id, 
          ...item.data(),
        }
    
      setProduct(auxProduct)
        
       })
      },[])


  return (
    <>
     {id.length ? <ItemDetail product = {product} /> : <p>Cargando...</p> }
    </>
  )
}

export default ItemDetailContainer