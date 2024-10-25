import React, { useState } from 'react';
import { Sidebar } from 'flowbite-react';
import { FaBars, FaUser, FaSignOutAlt, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <button onClick={toggleSidebar} className="p-2 text-gray-200 hover:text-gray-200">
        <FaBars size={24} />
      </button>

      {/* Animated Sidebar Menu */}
      <motion.div
        initial={{ x: '-100%' }} // Start position (off-screen to the left)
        animate={{ x: isOpen ? '0%' : '-100%' }} // Animate to visible or hidden
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 h-full w-64 z-50 bg-gray-800 text-white shadow-lg"
      >
        <Sidebar aria-label="Sidebar with profile">
          {/* Close Icon */}
          <div className="flex justify-end p-2">
            <button onClick={toggleSidebar} className="text-gray-400 hover:text-gray-200">
              <FaTimes size={20} />
            </button>
          </div>

          {/* Profile Section */}
          <div className="flex flex-col items-center p-4 border-b border-gray-700">
            <img
              className="w-16 h-16 rounded-full"
              src="https://via.placeholder.com/150"
              alt="Profile"
            />
            <p className="mt-2 font-semibold">Unknow name found</p>
            <p className="text-gray-400 text-sm">no email found!</p>
          </div>

          {/* Menu Links */}
          <div className="p-4">
            <a href="#" className="flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-700">
              <FaUser />
              <span>Profile</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-700"
              onClick={() => alert('Logged out')}
            >
              <FaSignOutAlt />
              <span>Logout</span>
            </a>
          </div>
        </Sidebar>
      </motion.div>
    </div>
  );
}

export default Header;
