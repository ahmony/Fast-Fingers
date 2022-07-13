import React from 'react'
import Logo from '../assets/logo.png';

const Header = () =>
{
    return (
        <div className='header'>
            <div className='header'>
                <img src={Logo} alt="logo" className='header__logo' />
                <h1 className='header__title'>Fast Fingers</h1>
            </div>
        </div>
    )
}

export default Header