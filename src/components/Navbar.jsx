import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a className="text-xl font-bold" href="#">Neocipher</a>
        <button className="md:hidden">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="hidden md:flex items-center space-x-4">
          <a className="text-gray-700 hover:text-blue-500" href="#home">Home</a>
          <a className="text-gray-700 hover:text-blue-500" href="#about">About Us</a>
          <a className="text-gray-700 hover:text-blue-500" href="#services">Services</a>
          <a className="text-gray-700 hover:text-blue-500" href="#projects">Projects</a>
          <a className="text-gray-700 hover:text-blue-500" href="#blog">Blog</a>
          <a className="p-2 px-4 bg-blue-600 text-white rounded-full baseline hover:bg-blue-700 transition-colors duration-300" href="#contact">Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
