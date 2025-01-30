import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-500 to-teal-400 m-0 p-0 fixed top-0 left-0 w-full z-10 h-10 flex items-center justify-end">
      <NavLink to="/" className="text-white p-4 m-0 mr-10">Home</NavLink>
      <NavLink to="/notes" className="text-white p-0 mr-10">Notes</NavLink>
    </nav>
  );
}

export default Navbar;
