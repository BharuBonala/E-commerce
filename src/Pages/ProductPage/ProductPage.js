import React, { useContext } from 'react'
import './ProductPage.css'
import { ShopContext } from '../../Context/ShopContext'
import { useParams } from 'react-router-dom'

import ProductDisplay from '../../Components/ProductDisplay/ProductDisplay'
import BreadCrums from '../../Components/BreadCrums/BreadCrums'
import DescriptionBox from '../../Components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../../Components/RelatedProducts/RelatedProducts'

const ProductPage = () => {
  const {all_product}=useContext(ShopContext)
  const {product_id}=useParams()
  const product = all_product.find((e)=>e.id === Number(product_id))
  return (
    <div>
      <BreadCrums product={product} />
      <ProductDisplay product={product}/>
      <DescriptionBox />
      <RelatedProducts/>
    </div>
  )
}

export default ProductPage