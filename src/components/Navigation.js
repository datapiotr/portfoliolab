import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav className='nav navigation'>
            <Link className='nav_element' to="/">Home</Link>

            <Link className='nav_element' to="/logowanie">Zaloguj</Link>

            <Link className='nav_element' to='/rejestracja'>Załóż konto</Link>
        </nav>
    );
}