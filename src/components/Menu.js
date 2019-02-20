import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    const activeStyle = {
        color: 'gree',
        fontSize: '2rem'
    }

    return (
        <div>
            <ul>
                <li><NavLink to="/" activeStyle={activeStyle}>홈</NavLink></li>
                <li><NavLink to="/about" activeStyle={activeStyle}>소개</NavLink></li>
                <li><NavLink to="/about/react" activeStyle={activeStyle}>React 소개</NavLink></li>
            </ul>
        </div>
    )
}


export default Menu;