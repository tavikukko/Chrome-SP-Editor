import React from 'react';
import { NavLink } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <nav className='space'>
      <NavLink to='/' exact >Home</NavLink> {" | "}
      <NavLink to='/editor' >Editor</NavLink>
    </nav>
  );
}

export default Header;
