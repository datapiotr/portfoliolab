import React from 'react';
import { Link } from "react-scroll";

export default function Navbar() {
    return (
        <nav className="nav" id="navbar">

            <Link
                className='nav_element'
                activeClass="active"
                to="start"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >Start</Link>

            <Link
                className='nav_element'
                activeClass="active"
                to="oCoChodzi"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >O co chodzi?</Link>

            <Link
                className='nav_element'
                activeClass="active"
                to="ONas"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >O nas</Link>

            <Link
                className='nav_element'
                activeClass="active"
                to="fundacja"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >Fundacja i organizacje</Link>

            <Link
                className='nav_element'
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >Kontakt</Link>

        </nav>
    )
}