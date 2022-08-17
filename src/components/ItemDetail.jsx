
import ItemCount from './ItemCount'





const ItemDetail = ({product}) => {



  return (
    <>
    <div className='caja'>
    <img src={product.img} alt='' className='img2' />
    <h2>{product.nombre}</h2> 
    <p>${product.precio}</p>
    <p>Stock disponible  {product.stock}</p>

    <ItemCount product={product} />
    </div>
     
     </>
  )
}

export default ItemDetail