

import React,{useState} from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
    const [open,setOpen] =useState('false')
    return (
        <div>
            <nav>
                <ul>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link'>Home</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='/videos' className='nav-link'>Videos</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='/about' className='nav-link'>About</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='/contact' className='nav-link'>Contact</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='/merch' className='nav-link'>Merch</Link>
                    </li>

                    
                </ul>
            </nav>
            
        </div>
    )
}

export default Navbar
