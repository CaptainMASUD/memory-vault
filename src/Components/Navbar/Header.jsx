'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaUser, FaSignOutAlt, FaTimes, FaUserFriends } from 'react-icons/fa'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const friends = [
    { id: 1, name: 'Alice Johnson', status: 'online' },
    { id: 2, name: 'Bob Smith', status: 'offline' },
    { id: 3, name: 'Charlie Brown', status: 'online' },
  ]

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <button 
        onClick={toggleSidebar} 
        className="fixed top-4 left-4 z-50 p-2 bg-purple-600 rounded-full text-white hover:bg-purple-700 transition-colors duration-300"
      >
        <FaBars size={24} />
      </button>

      {/* Animated Sidebar Menu */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? '0%' : '-100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 h-full w-80 z-40 bg-gradient-to-br from-purple-900/80 to-indigo-900/80 backdrop-blur-lg text-white shadow-lg"
      >
        <div className="h-full flex flex-col">
          {/* Close Icon */}
          <div className="flex justify-end p-4">
            <button onClick={toggleSidebar} className="text-gray-300 hover:text-white transition-colors duration-300">
              <FaTimes size={24} />
            </button>
          </div>

          {/* Profile Section */}
          <div className="flex flex-col items-center p-6 border-b border-purple-700/50">
            <img
              className="w-24 h-24 rounded-full border-4 border-purple-500 shadow-lg"
              src="https://via.placeholder.com/150"
              alt="Profile"
            />
            <p className="mt-4 text-xl font-semibold text-purple-200">Unknown User</p>
            <p className="text-purple-300 text-sm">user@example.com</p>
          </div>

          {/* Menu Links */}
          <nav className="flex-grow p-6 space-y-4">
            <a href="#" className="flex items-center space-x-3 py-2 px-4 rounded-lg bg-purple-800/50 hover:bg-purple-700/50 transition-colors duration-300">
              <FaUser className="text-purple-300" />
              <span>Profile</span>
            </a>
            <a href="#" className="flex items-center space-x-3 py-2 px-4 rounded-lg bg-purple-800/50 hover:bg-purple-700/50 transition-colors duration-300">
              <FaUserFriends className="text-purple-300" />
              <span>Friends</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 py-2 px-4 rounded-lg bg-purple-800/50 hover:bg-purple-700/50 transition-colors duration-300"
              onClick={() => alert('Logged out')}
            >
              <FaSignOutAlt className="text-purple-300" />
              <span>Logout</span>
            </a>
          </nav>

          {/* Friends Section */}
          <div className="p-6 border-t border-purple-700/50">
            <h3 className="text-lg font-semibold mb-4 text-purple-200">Friends</h3>
            <ul className="space-y-3">
              {friends.map((friend) => (
                <li key={friend.id} className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${friend.status === 'online' ? 'bg-green-400' : 'bg-gray-400'}`}></div>
                  <span>{friend.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Header