import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import cart_remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {getTotalAmountOfCart,all_product,cartItems,addToCArt,removeFromCArt}=useContext(ShopContext)
  return (
    <div className='cartItems'>
        <div className='cartItems-main-format'>
            <p>Products</p>
            <p>Title</p>
            <p>price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>        
        </div>
        <hr/>
        {all_product.map((product,i)=>{
            if(cartItems[product.id]>0)
            {
                return <div key={i}>
                          <div className='cartItems-format cartItems-main-format'>
                            <img src={product.image} alt=" " className='cartIcon-product-icon'/>
                            <p>{product.name}</p>
                            <p>${product.new_price}</p>
                            <button className='cartItems-quantity'>{cartItems[product.id]}</button>
                            <p>{product.new_price * cartItems[product.id]}</p>
                            <img src={cart_remove_icon} onClick={()=>{removeFromCArt(product.id)}} className='cartItems-remove-icon' alt=""/>
                           </div>
                           <hr/>
                      </div>
                
            }return null;
        })}
        <div className='cartItems-down'>
            <div className='cartItems-total'>
                <h1>Cart Items</h1>
                <div>
                <div className='cartItems-total-item'>
                    <p>Subtotal</p>
                    <p>${getTotalAmountOfCart()}</p>
                </div>
                <hr/>
                <div className='cartItems-total-item'>
                    <p>Shipping Free</p>
                    <p>Free</p>
                </div>
                <hr/>
                <div className='cartItems-total-item'>
                    <h3>Total</h3>
                    <h3>${getTotalAmountOfCart()}</h3>
                </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div> 
            <div className='cartItems-promocode'>
            <p>If you have a promo code,enter it here</p>
            <div className='cartItems-promobox'>
                <input type="text" placeholder='promo code'/>
                <button>Submit</button>
            </div>
        </div>
        </div>
        

    </div>
  )
}

export default CartItems