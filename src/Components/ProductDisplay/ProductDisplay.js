import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} =props
    const {addToCArt} = useContext(ShopContext)
  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className='productdisplay-imagelist'>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
            </div>
            <div className='productdisplay-img'>
                <img className='productdisplay-main-img' src={product.image} alt=""/>
            </div>
        </div>
        <div className='productdisplay-right'>
            <h1>{product.name}</h1>
            <div className='productdisplay-right-stars'>
                <img src={star_icon} alt=""/>
                <img src={star_icon} alt=""/>
                <img src={star_icon} alt=""/>
                <img src={star_icon} alt=""/>
                <img src={star_dull_icon} alt=""/>
                <p>122</p>
            </div>
            <div className='productdisplay-right-prices'>
                <div className='productdisplay-right-oldPrice'>${product.old_price}</div>
                <div className='productdisplay-right-newPrice'>${product.new_price}</div>
            </div>
            <div className='productdisplay-right-description'>
                A liteweight usually knitted ,pullOver Looking for a comfortable and stylish shirt to wear out or to lounge around in? Look no further than the Keep On Smiling Shirt!
                This trendy oversized vintage shirt is made from 100% cotton, which makes it comfortable to wear. It is the most versatile piece in my wardrobe.
            </div>
            <div className='productdisplay-right-sizes'>
                <h1>Select your size</h1>
                <div className='productdisplay-right-size'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCArt(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category:</span> women, T-shirt, cropTop</p>
            <p className='productdisplay-right-category'><span>Tags:</span>Modern  ,Latest</p>
        </div>

    </div>
  )
}

export default ProductDisplay