import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Herosection from './components/Herosection';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    // Add scroll event listener to show/hide the scroll button
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowScrollButton(scrollTop > 150);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Navbar />
      <Herosection />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      {showScrollButton && (
   <button
   onClick={scrollToTop}
   className="fixed bottom-5 right-5 p-3 rounded-full bg-transparent  focus:outline-none"
 >
   <BsFillArrowUpCircleFill className="text-blue-500 text-3xl opacity-50  hover:opacity-100" />
 </button>
 
      )}
    </>
  );
}

export default App;
