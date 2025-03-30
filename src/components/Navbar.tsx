import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import spotifyLogo from '../assets/spotify-logo.png';
import searchIcon from '../assets/search.svg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#282828] w-full fixed top-0 h-[64px] flex items-center px-4 md:px-8">
      <div className="w-full flex items-center justify-between md:justify-start">

        <div className="flex items-center space-x-4 md:space-x-6 md:w-1/3">
          <img src={searchIcon} alt="Search" className="w-5 h-5 opacity-60 hover:opacity-100" />
          <Link to="/">
            <img src={spotifyLogo} alt="Spotify" className="h-7" />
          </Link>
          <div className="hidden md:flex items-center space-x-1">
            <button className="w-[32px] h-[32px] rounded-full bg-black flex items-center justify-center hover:bg-[#1A1A1A]">
              <span className="text-lg text-[#8A8A8A]">&lt;</span>
            </button>
            <button className="w-[32px] h-[32px] rounded-full bg-black flex items-center justify-center hover:bg-[#1A1A1A]">
              <span className="text-lg text-[#8A8A8A]">&gt;</span>
            </button>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center space-x-6 w-1/3">
          <Link to="/" className="text-white hover:text-white font-medium text-lg">
            Home
          </Link>
          <Link to="/browse" className="text-[#8A8A8A] hover:text-white font-medium text-lg">
            Browse
          </Link>
          <Link to="/library" className="text-[#8A8A8A] hover:text-white font-medium text-lg">
            Library
          </Link>
        </div>

        <div className="md:w-1/3 flex justify-end items-center">
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className="hidden md:block">
            <div className="h-[32px] bg-black rounded-full flex items-center px-1">
              <div className="w-7 h-7 rounded-full bg-[#535353]"></div>
              <span className="text-[#8A8A8A] font-medium text-sm ml-2">Name</span>
            </div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[64px] right-0 bg-[#282828] p-4 w-48">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-white hover:text-white font-medium text-lg">
              Home
            </Link>
            <Link to="/browse" className="text-[#8A8A8A] hover:text-white font-medium text-lg">
              Browse
            </Link>
            <Link to="/library" className="text-[#8A8A8A] hover:text-white font-medium text-lg">
              Library
            </Link>
            <div className="h-[32px] bg-black rounded-full flex items-center px-1 mt-4 w-fit">
              <div className="w-7 h-7 rounded-full bg-[#535353]"></div>
              <span className="text-[#8A8A8A] font-medium text-sm ml-2">Name</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 