'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaUser, FaSignOutAlt, FaTimes, FaUserFriends } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  
  const credentials = [
    { email: 'masud.com', password: 's', profileImage: 'https://via.placeholder.com/150?text=Masud' },
    { email: 'user2@example.com', password: 'password2', profileImage: 'https://via.placeholder.com/150?text=User2' },
    { email: 'user3@example.com', password: 'password3', profileImage: 'https://via.placeholder.com/150?text=User3' },
    // Add additional user images here...
  ]

  const navigate = useNavigate()

  useEffect(() => {
    // Retrieve email and password from localStorage
    const storedEmail = localStorage.getItem('email')
    const storedPassword = localStorage.getItem('password')

    // Verify credentials
    const user = credentials.find(
      (cred) => cred.email === storedEmail && cred.password === storedPassword
    )
    
    if (user) {
      setCurrentUser(user) // Set the current user if verification is successful
    } else {
      console.log('No valid user found.')
    }
  }, [])

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const handleLogout = () => {
    // Clear localStorage and reset current user
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    setCurrentUser(null)
    setIsOpen(false)
    
    // Show toast notification
    toast.success('Logged out successfully', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
    
    // Reload the page after a short delay for the toast to show
    setTimeout(() => window.location.reload(), 3000)
  }

  const friends = [
    { id: 1, name: 'Alice Johnson', status: 'online' },
    { id: 2, name: 'Bob Smith', status: 'offline' },
    { id: 3, name: 'Charlie Brown', status: 'online' },
  ]

  return (
    <div className="relative">
      <ToastContainer />
      
      {/* Profile Icon or Hamburger Menu */}
      {currentUser && (
        <button 
          onClick={toggleSidebar} 
          className="fixed top-4 left-4 z-50 p-2 bg-purple-600 rounded-full text-white hover:bg-purple-700 transition-colors duration-300"
        >
          <img
            src={currentUser.profileImage}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </button>
      )}

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
            {currentUser ? (
              <>
                <img
                  className="w-24 h-24 rounded-full border-4 border-purple-500 shadow-lg"
                  src={currentUser.profileImage}
                  alt="Profile"
                />
                <p className="mt-4 text-xl font-semibold text-purple-200">{currentUser.email}</p>
                <p className="text-purple-300 text-sm">{currentUser.email}</p>
              </>
            ) : (
              <p className="text-red-500">No user logged in</p>
            )}
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
            <button
              onClick={handleLogout}
              className="flex items-center space-x-3 py-2 px-4 rounded-lg bg-purple-800/50 hover:bg-purple-700/50 transition-colors duration-300"
            >
              <FaSignOutAlt className="text-purple-300" />
              <span>Logout</span>
            </button>
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
