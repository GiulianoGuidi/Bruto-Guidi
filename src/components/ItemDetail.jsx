
import ItemCount from './ItemCount'





const ItemDetail = ({product}) => {



  return (
    <>
    <div className='flexBox'>
    <img src={product.img} alt='' className='img2' />
    
    <div className='box'>
    <h2>{product.nombre}</h2> 
    <p>${product.precio}</p>
    <p>Stock disponible  {product.stock}</p>

    <ItemCount product={product} />
    </div>
    </div> 
     
    
     
     </>
  )
}

export default ItemDetail