import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className='navbar bg-dark'>
            <h1>
                <Link to='dashboard.html'>
                    <i className='fas fa-code' /> DevSocial
                </Link>
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='profile.html'>Developers</Link>
                </li>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;
