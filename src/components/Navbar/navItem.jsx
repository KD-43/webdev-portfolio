import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = memo(function NavItemComponent ({ to, label }) {
    return (
        <li>
            <NavLink to={to}>{label}</NavLink>
        </li>
    );
});

export default NavItem;