import React  from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const RelatedProducts = () => {
  
  return (
    <div className='relatedProducts'>
      <h1>RelatedProducts</h1>
      <hr/>
      <div className='relatedProducts-item'>
        {data_product.map((item,i)=>{
          return  <Item key={i} name={item.name} id={item.id} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}

      </div>
    </div>
  )
}

export default RelatedProducts