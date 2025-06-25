import React, { memo, useState } from 'react';
import './navbar.scss';

const Navbar = memo(function NavbarComponent ({ children }) {

    return (
        <nav className="navbar text-heading fs-2">
            <ul className="nav-list">
                {children}
            </ul>
        </nav>
    )
})

export default Navbar;