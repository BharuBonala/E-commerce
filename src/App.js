import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ShopPage from './Pages/ShopPage/ShopPage'
import ShopCategoryPage from './Pages/ShopCategoryPage/ShopCategoryPage'
import ProductPage from './Pages/ProductPage/ProductPage'
import CartPage from './Pages/CartPage/CartPage'
import LoginSignupPage from './Pages/LoginSignupPage/LoginSignupPage'
import Footer from './Components/Footer/Footer'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ShopPage />}/>
        <Route path="/mens" element={<ShopCategoryPage banner={men_banner}  category="men"/>}/>
        <Route path="/womens" element={<ShopCategoryPage banner={women_banner}  category="women"/>}/>
        <Route path="/kids" element={<ShopCategoryPage banner={kid_banner}  category="kid"/>}/>
        <Route path="/product/:product_id" element={<ProductPage/>}/>   
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/login" element={<LoginSignupPage/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  )
}

export default App