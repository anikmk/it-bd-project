import { NavLink } from 'react-router-dom';
import logo from '../assets/images/strict.png'
const NavBar = () => {
    const navLink = <>
    <li className='text-xl'><NavLink to="/">Home</NavLink></li>
    <li className='text-xl'><NavLink to="/about">About</NavLink></li>
    <li className='text-xl'><NavLink to="/service">Service</NavLink></li>
    <li className='text-xl'><NavLink to="/protfolio">Protfolio</NavLink></li>
    <li className='text-xl'><NavLink to="/contact">Contact</NavLink></li>
    </>
    return (
        <div className='bg-[#f5f9f9] sticky top-0 '>
            <div className="navbar max-w-6xl mx-auto font-oswald">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#f5f9f9] rounded-box w-52">
        {navLink}
      </ul>
    </div>
    <img src={logo}alt="" />
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-4">
      {navLink}
    </ul>
  </div>
        </div>
        </div>
    );
};

export default NavBar;