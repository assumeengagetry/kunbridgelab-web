import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { LAB_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Apply transparent header to Home, Research, and Team for consistency
  const isTransparentPage = ['/', '/research', '/team'].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Research', path: '/research' },
    { name: 'People', path: '/team' },
    { name: 'News', path: '/news' },
    { name: 'Join Us', path: '/join' },
  ];

  // Navbar style: transparent on top of big hero sections, white otherwise
  const navClass = isTransparentPage && !scrolled 
    ? "bg-transparent text-white border-transparent" 
    : "bg-white/95 backdrop-blur-md text-slate-900 shadow-sm border-slate-100";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 border-b ${navClass}`}>
      <div className="max-w-[1800px] mx-auto px-6 lg:px-16">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex flex-col justify-center group">
              <span className="font-heading font-black text-2xl tracking-widest leading-none group-hover:text-blue-500 transition-colors">
                {LAB_NAME}
              </span>
              <span className={`text-[10px] font-bold tracking-[0.4em] uppercase mt-1 ${isTransparentPage && !scrolled ? 'text-white/80' : 'text-slate-500'}`}>
                Multimedia Laboratory
              </span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-blue-500 relative group py-2 ${
                  location.pathname === link.path ? 'text-blue-500' : ''
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${location.pathname === link.path ? 'scale-x-100' : ''}`}></span>
              </Link>
            ))}
          </div>

          {/* Mobile Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 focus:outline-none hover:text-blue-500 transition-colors"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-slate-900 border-t border-slate-100 absolute w-full left-0 top-24 shadow-2xl">
          <div className="px-6 py-8 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-xl font-heading font-black uppercase tracking-widest hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
