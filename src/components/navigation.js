import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from "react-scroll"


const Navigation = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                 <h2 className=" text-slate-200  text-2xl font-extrabold"> MIKE C</h2>
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>ABOUT</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="services" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>SERVICES</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="testimonials" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>TESTIMONIALS</Link>
                    </li>
                    <li className='nav-item'>
                            <Link to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>CONTACT</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation


