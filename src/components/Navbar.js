import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
    return (
        <>
          <div className='navbar'>
            <div className='nav-menu flex-row'>
               <div className='nav-brand'>
                    <Link to='/#' className='text-gray' style={{ fontSize:20,padding:20, textDecorationLine:"none",display:"block"}}>Huddle Blog</Link>
               </div>
           
            <div>
                <ul className='nav-items' >
                    <li className='nav-link'>
                        <Link to='/' style={{textDecorationLine:"none"}}>Home</Link>
                    </li>

                    <li className='nav-link'>
                        <Link to='/category'style={{textDecorationLine:"none"}}>Category</Link>
                    </li>

                    <li className='nav-link'>
                        <Link to='/archive'style={{textDecorationLine:"none"}}>Archive</Link>
                    </li>

                    <li className='nav-link'>
                        <Link to='/pages' style={{textDecorationLine:"none"}}>Pages</Link>
                    </li>
                    <li className='nav-link'>
                        <Link to='/contact'style={{textDecorationLine:"none"}}>Contact Us</Link>
                    </li>
                </ul>
            </div>

            <div className='social text-gray'>
                <Link><i class="fa fa-facebook-official" aria-hidden="true"></i></Link>
                <Link><i class="fa fa-instagram" aria-hidden="true"></i></Link>
                <Link><i class="fa fa-twitter" aria-hidden="true"></i></Link>
                <Link><i class="fa fa-youtube" aria-hidden="true"></i></Link>
            </div>
          </div>
          </div>
        </>
    )
}

export default Navbar
