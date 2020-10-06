import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'
import '../styles/Navbar.css'
function Navbar() {
    return (
        <>
           <div className='navbar'>
                <div className='nav-menu'>
                    <div className='row'>
                        <div className=' logo'>
                                <img src={logo} alt='logo'/>
                        </div>

                        <div >
                            <ul className='nav-list'>
                                <li><a href='/'>Home</a></li>
                                <li><a href='/about'>About</a></li>
                                <li><a href='/contact'>Contact</a></li>
                                <li><a href='/blog'>Blog</a></li>
                                <li><a href='/careers'>Careers</a></li>
                                

                            </ul>
                        </div>

                        <button>Request Invite</button>
                    </div>
                </div>
           </div>
        </>
    )
}

export default Navbar
