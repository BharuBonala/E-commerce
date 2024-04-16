import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import watsapp_icon from '../Assets/whatsapp_icon.png'
 
const icons_data=[
    {'icon':instagram_icon},{'icon':pintester_icon},{'icon':watsapp_icon}
]

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt=''/>
            <p>SHOPPER</p>
        </div>
        <ul className='footer-links'>
            <li> Company </li>
            <li> Products </li>
            <li> Offices </li>
            <li> About </li>
            <li> Contact </li>

        </ul>
        <div className='footer-social-icon'>
            {icons_data.map((item,index)=>{
                return(
                    <div className='footer-icons-container' key={index}>
                       <img src={item.icon} alt=''/>
                    </div>
                )
            })}
        </div>
        <div className='footer-copyright'>
            <hr/>
            <p>Copyright @ 2024 ------ All Rights Reserved</p>
        </div>

    </div>
  )
}

export default Footer