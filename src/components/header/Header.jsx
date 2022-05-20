import React from 'react'
import './Header.css'
import headerLogo from '../../assets/images/headerLogo.png'

const Header = () => {
  return (
    <div className=' header position-fixed top-0 row d-flex justify-content-between'>
        <div className=' col-2 d-flex align-items-center'><img className='header-logo' src={headerLogo} alt="header logo"/></div>
        <div className='nav-items-container  container-fluid col-10 d-flex justify-content-end align-items-center'>
                <div className=' nav-item'>Home</div>
                <div className=' nav-item'>About</div>
                <div className=' nav-item'>Projects</div>
                <div className=' nav-item'>Partners</div>
                <div className=' nav-item'>Contact</div>
                <div className=' nav-item'>Claim</div>
        </div>
    </div>
  )
}

export default Header