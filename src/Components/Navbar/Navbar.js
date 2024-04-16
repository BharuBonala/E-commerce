import './Navbar.css'
import React, { useContext, useRef, useState } from 'react'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import drop_down from '../Assets/drop_down.png'

const menu_data=[
    {'menu_item':'Shop','id':'shop','path':'/'},
    {'menu_item':'Men','id':'men','path':'/mens'},
    {'menu_item':'Women','id':'women','path':'/womens'},
    {'menu_item':'Kids','id':'kids','path':'/kids'}
]

const Navbar = () => {
    const [menu,setMenu]=useState('shop')
    const {getTotalCartItems} =useContext(ShopContext)
    const menuRef=useRef();

    const dropDownToggle=(e)=>{
        menuRef.current.classList.toggle('nav-menu-visible')
        e.target.classList.toggle('open')
    }
  return (
    <>
    <nav className='navbar'>
        <div className='nav-left'>
            <img src={logo} alt=""/>
             <p>Shopper</p>
        </div>
        <img className='nav-drop-down' onClick={dropDownToggle} src={drop_down} alt=""/>
        <ul ref={menuRef} className='nav-middle'>
            {menu_data.map((item,index)=>{
                return(
                        <div key={index}>
                        <li onClick={()=>setMenu(item.id)}><Link to={item.path} style={{textDecoration:'none',color: '#626262'}}>{item.menu_item}</Link> {menu === item.id ? <hr/> : <></>}</li>       
                        </div> 
                )
            })}
        </ul>
        <div className='nav-right'>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/cart"><img src={cart_icon} alt=""/></Link>
            <div className='cart-count'>{getTotalCartItems()}</div>
        </div>
    </nav>
    </>
  )
}

export default Navbar