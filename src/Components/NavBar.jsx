import React from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.css';
import '../Styles/Navbar.css'



function Navbar() {
  return (
    <nav className="navbar">
      {/* <button className="theme-toggle" onClick={() => document.body.classList.toggle('light-theme')}>
  Toggle Theme
</button> */}

      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
// const toggleTheme = () => {
//   document.body.classList.toggle('light-theme');
// };
export default Navbar;
