import React, { useState, useRef, useEffect } from 'react';
import { BiAlignRight } from "react-icons/bi";
import '../styles/animation.css';
import { useDarkMode } from '../contexts/DarkMode';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';

const Navbar = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const navRef = useRef(null);
  const { isDarkModeOpen, toggleDarkMode } = useDarkMode();

  const openCV = () => {
 import('../assets/CV.pdf').then((module) => {
      const CV = module.default;
      window.open(CV, '_blank', 'noopener,noreferrer');
    });
   };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };



  useEffect(() => {
    setIsAnimated(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setShowSidebar(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <nav className={`${isDarkModeOpen ? 'bg-gray-900 shadow-sm shadow-gray-100' : 'bg-white shadow-lg'}  relative z-10`}>
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className='flex'>
          <button onClick={openCV} className={`ml-8 border py-1 px-2 rounded transition duration-300 shadow-md ${isDarkModeOpen ? ' text-white hover:text-black  bg-black border-white hover:bg-white hover:border-black' : ' text-black hover:text-white  bg-white border-black hover:bg-black hover:border-white'}  ${isAnimated ? 'animated-right visible' : 'animated-right'}`}>
            Show CV
          </button>
          <button className='ml-5 flex items-center justify-center' onClick={() => toggleDarkMode(!isDarkModeOpen)}>
            {isDarkModeOpen ? (
              <i className='text-2xl text-white'><BsFillMoonStarsFill /></i>
            ) : (
              <i className='text-2xl text-yellow-500'><BsSunFill /></i>
            )}
          </button>
        </div>
        <button
          className={`text-2xl text-${isDarkModeOpen ? 'white' : 'gray-800'} mr-5 hover:text-${isDarkModeOpen ? 'white' : 'black'} ml-2 md:hidden sm:hidden`}
          onClick={toggleSidebar}
        >
          <BiAlignRight />
        </button>
        {showSidebar && <SidebarList navRef={navRef} scrollToSection={scrollToSection}/>}
        <ul className={`lg:flex space-x-4 mr-2 hidden md:flex sm:flex  text-${isDarkModeOpen ? 'white' : 'gray-600'}`}>
          <NavItem text="About" scrollToSection={scrollToSection} />
          <NavItem text="Skills" scrollToSection={scrollToSection} />
          <NavItem text="Projects" scrollToSection={scrollToSection} />
          <NavItem text="Contact" scrollToSection={scrollToSection} />
        </ul>
      </div>
    </nav>
  );
};

const NavItem = ({ text, link ,scrollToSection}) => {
  const { isDarkModeOpen } = useDarkMode();


  return (
    <li onClick={() => scrollToSection(text)} className={`cursor-pointer ${isDarkModeOpen ? 'text-white hover:text-gray-300' : 'text-gray-600 hover:text-black'} `}>
      <a href={link}>{text}</a>
    </li>
  );
};

const SidebarList = ({ navRef ,scrollToSection}) => {
  const { isDarkModeOpen } = useDarkMode();

  return (
    <ul
      ref={navRef}
      className={`absolute top-full right-3 border-2 p-2 rounded-lg shadow-lg sm:hidden md:hidden lg:hidden ${isDarkModeOpen ? 'border-gray-800 bg-black' : 'border-gray-400 bg-white'} mt-2 `}
    >
      {['About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
        <li
          key={index}
          onClick={()=>scrollToSection(item)}
          className={`w-32 flex cursor-pointer items-center justify-center ${isDarkModeOpen ? 'text-white hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-300'} cursor-pointer px-2 py-1 rounded-md transition duration-300`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
