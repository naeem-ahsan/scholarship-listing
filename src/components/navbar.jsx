import React, { useState } from "react";
// import { Link, animateScroll as scroll, } from 'react-scroll'
import logo from '../assets/Logo.png';

import { MenuIcon, XIcon } from '@heroicons/react/solid';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const handleClose = () => setNav(!nav)

  return (
    <div className='md:h-[80px] h-[90px] z-50  drop-shadow-lg lg:rounded-lg lg:my-8 w-screen lg:w-[90%] lg:ml-[5%] bg-gradient-to-b p-[2px] from-beaver  to-beaver-dark relative'>
      {/*--- desktop nav view ---*/}
      <div className='px-8 flex justify-between items-center w-full h-full bg-nav-bg lg:rounded-lg'>
        <div className='flex items-center'>
          <img className="mt-4 h-[120px] w-[100px] z-20" src={logo} alt="/" />
          <ul className='hidden md:flex'>
            <li className="mx-2 text-white"><a href="/" to="home" smooth={true} duration={500}>Home</a></li>
            <li className="mx-2 text-white"><a href="/" to="scholarship" smooth={true} offset={-200} duration={500}>Scholarship</a></li>
            <li className="mx-2 text-white"><a href="/" to="guilds" smooth={true} offset={-50} duration={500}>Guilds</a></li>
            <li className="mx-2 text-white"><a href="/" to="games" smooth={true} offset={-100} duration={500}>Games</a></li>
          </ul>
        </div>

        <div className='hidden md:flex pr-4'>
          <ul className='md:flex items-center md:px-4'>
            <li className="mx-2 text-white"><a href="/" to="home" smooth={true} duration={500}>Team</a></li>
            <li className="mx-2 text-white"><a href="/" to="about" smooth={true} offset={-200} duration={500}>Wallpaper</a></li>
          </ul>

          {/* button 1 */}
          <div className="py-2 px-4 border-2 border-border-color rounded-lg bg-gradient-to-b p-[2px] from-[#39342C]  to-[#39342D]">
            <button className='border-none bg-transparent text-white'>
              Sign Up
            </button>
          </div>
          {/* button 2 */}
          <div className="mx-4 py-2 px-4 border-2 border-border-color rounded-lg bg-gradient-to-b p-[2px] from-[#39342C]  to-[#39342D]">
            <button className='text-white'>Connect Wallet</button>
          </div>
        </div>

        <div className='md:hidden mr-4 text-white' onClick={handleClick}>
          {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
        </div>
      </div>

      {/*--- mobile nav view ---*/}
      <ul className={!nav ? 'hidden' : 'absolute w-full px-8 bg-bg-light95 '}>
        <li className='w-full text-white my-4'><a href="/" onClick={handleClose} to="home" smooth={true} duration={500}>Home</a></li>
        <li className='w-full text-white my-4'><a href="/" onClick={handleClose} to="scholarship" smooth={true} offset={-200} duration={500}>Scholarship</a></li>
        <li className='w-full text-white my-4'><a href="/" onClick={handleClose} to="guilds" smooth={true} offset={-50} duration={500}>Guilds</a></li>
        <li className='w-full text-white my-4'><a href="/" onClick={handleClose} to="games" smooth={true} offset={-100} duration={500}>Games</a></li>

        <div className='flex flex-col my-4'>
          <button className='px-8 py-2 bg-heading-font rounded'>Sign In</button>
          <button className='px-8 py-2 my-4 bg-heading-font rounded'>Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;