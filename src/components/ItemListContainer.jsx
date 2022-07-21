import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = () => {
  return (
    <>
    <div className='titulo'>
        <div className='card'>
  <div className="card-body">
  <h3>Pan de campo</h3>
   <p>$500</p>
   <ItemCount  stock = '4'/>
  </div>
</div>
<div className='card'>
  <div className="card-body">
  <h3>Pan de centeno</h3>
  <p>$500</p>
  <ItemCount stock = '5' />
  </div>
</div>
<div className='card'>
  <div className="card-body">
  <h3>Foccacia</h3>
  <p>$450</p>
  <ItemCount  stock = '1'/>
  </div>
</div>
<div className='card'>
  <div className="card-body">
  <h3>Baguette</h3>
  <p>$350</p>
  <ItemCount  stock = '6'/>
  </div>
</div>
        

    </div>
    </>
  )
}


export default ItemListContainer