import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import '../css/header.min.css';

const Header = memo(() => {
  return (
    <div className='header_wrap'>
      <NavLink to='/'>Home</NavLink>

      <ul className='header__sideLink'>
        <li><NavLink to='/'>test</NavLink></li>
        <li><NavLink to='/'>test</NavLink></li>
        <li><NavLink to='/'>test</NavLink></li> 
      </ul>
    </div>
  );
});

export default Header;