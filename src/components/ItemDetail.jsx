
import ItemCount from './ItemCount'





const ItemDetail = ({product}) => {



  return (
    <>
    <div className='flex justify-center'>
    <img src={product.img} alt='' className='w-400 h-auto w-64 h-64 rounded-xl' />
    
    <div className='m-8'>
    <h2 className='italic text-2xl'>{product.nombre}</h2> 
    <p className='italic text-2xl'>${product.precio}</p>
    <p className='italic text-2xl'>Stock disponible  {product.stock}</p>

    <ItemCount product={product} />
    </div>
    </div> 
     
    
     
     </>
  )
}

export default ItemDetail