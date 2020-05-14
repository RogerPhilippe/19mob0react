import React from 'react';
import logo from '../../assets/logo.png';

import './style.css';

const Header = () => {
    return (
        <header className="header">
        <img className="image" src={logo} />
    </header>
    );
}

export default Header;