import React, { createContext, useState } from "react";
import  all_product from '../Components/Assets/all_product'

export const ShopContext=createContext(null);

const getDefaultCart=()=>{
    let cart={};
    for(let index=0 ; index < all_product.length+1 ;index++){
        cart[index]=0
    }
    return cart;
}

const ShopContextProvider=(props)=>{

    
    const [cartItems,setCartItems]=useState(getDefaultCart())

    const addToCArt=(itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
        console.log(cartItems)
    }

    const removeFromCArt=(itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
    }

    const getTotalAmountOfCart=()=>{
        let totalAmount=0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0){
                let cartProduct = all_product.find((product)=>product.id === Number(item))
                totalAmount += cartProduct.new_price * cartItems[item];
            }
        }
        return totalAmount;

    }

    const getTotalCartItems=()=>{
        let totalCartItems=0;
        for (const item in cartItems){
            if (cartItems[item]>0){
                totalCartItems+=cartItems[item]
            }
        }
        return totalCartItems;
    }

    const contextValue = {getTotalCartItems, getTotalAmountOfCart,all_product,cartItems,addToCArt,removeFromCArt}
    
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
    

}
export default ShopContextProvider;