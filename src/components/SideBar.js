import React from 'react'
import Logo from '../assets/BottleCap_Logo.svg'
import '../styles/Sidebar.scss'
import Hand from '../assets/hand.png'

/**
* @author Decory Herbert
* @function SideBar
**/

const SideBar = (props) => {
  return(
    <div id='SideBar_wrapper'>
        <div id='logo'>    
        <img src={Logo} alt='Logo' />   
        </div>
        <div id='menu_wrapper'> 
        
       <div>
       Hello Member! Welcome to BottleCap's Beta Portal
       <img style={{width: '20px'}} src={Hand} alt='' />
      </div>
        
        <div className='menus'>
        <h4>Technical Breakdown - Coming Soon</h4>
        </div>
        </div>
    </div>
   )

 }

export default SideBar