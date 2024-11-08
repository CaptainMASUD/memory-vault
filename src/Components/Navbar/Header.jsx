'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaUser, FaSignOutAlt, FaTimes, FaUserFriends } from 'react-icons/fa'
import { useNavigate, Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)

  const credentials = [
    { email: 'masud.com', password: 's', profileImage: 'https://scontent.fdac41-2.fna.fbcdn.net/v/t39.30808-6/462373053_567421672299324_3777899324825412651_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGs3IwuOGlRAdFs2pDXURLpRy01_sMe1gVHLTX-wx7WBfeZL475I_-xcO8axSDqdHyxyk140oiLer1_Ac9l18rF&_nc_ohc=L-flAC-c2aYQ7kNvgEJtSf7&_nc_zt=23&_nc_ht=scontent.fdac41-2.fna&_nc_gid=AjYawB7VfVlP89aleD2PPCI&oh=00_AYBTzkb7ENiJ4VVR6JoYvKaXHwcrY_K9B9-IyYg30NEmNA&oe=67336297' },
    { email: 'ayan@gmail.com', password: '6149' , profileImage: 'https://via.placeholder.com/150?text=User2' },
    { email: 'user3@example.com', password: 'password3', profileImage: 'https://via.placeholder.com/150?text=User3' },
  ]

  const navigate = useNavigate()

  useEffect(() => {
    const storedEmail = localStorage.getItem('email')
    const storedPassword = localStorage.getItem('password')

    const user = credentials.find(
      (cred) => cred.email === storedEmail && cred.password === storedPassword
    )

    if (user) {
      setCurrentUser(user)
      setIsOpen(true) // Automatically open sidebar if user is found
    }
  }, [])

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const handleLogout = () => {
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    setCurrentUser(null)
    setIsOpen(false)

    toast.success('Logged out successfully', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })

    // Reload the page after the toast message displays for 3 seconds
    window.location.reload()
  
  }


  return (
    <div className="relative">
      <ToastContainer />

      {/* Only render Sidebar if a current user exists */}
      {currentUser ? (
        <>
          {/* Profile Icon */}
          <button 
            onClick={toggleSidebar} 
            className="fixed top-4 left-4 z-50 p-[3px] bg-purple-600 rounded-full text-white hover:bg-purple-700 transition-colors duration-300"
          >
            <img
              src={currentUser.profileImage}
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </button>

          {/* Sidebar Menu */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: isOpen ? '0%' : '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 h-full w-80 z-40 bg-gradient-to-br from-purple-900/80 to-indigo-900/80 backdrop-blur-lg text-white shadow-lg"
          >
            <div className="h-full flex flex-col">
              <div className="flex justify-end p-4">
                <button onClick={toggleSidebar} className="text-gray-300 hover:text-white transition-colors duration-300">
                  <FaTimes size={24} />
                </button>
              </div>

              <div className="flex flex-col items-center p-6 border-b border-purple-700/50">
                <img
                  className="w-24 h-24 rounded-full border-4 border-purple-500 shadow-lg"
                  src={currentUser.profileImage}
                  alt="Profile"
                />
                <p className="mt-4 text-xl font-semibold text-purple-200">{currentUser.email}</p>
              </div>

              <nav className="flex-grow p-6 space-y-4">
                <Link 
                  to="/" 
                  className="flex items-center space-x-3 py-2 px-4 rounded-lg bg-purple-800/50 hover:bg-purple-700/50 transition-colors duration-300"
                >
                  <FaUser className="text-purple-300" />
                  <span>Home</span>
                </Link>
                <Link 
                  to="/profile" 
                  className="flex items-center space-x-3 py-2 px-4 rounded-lg bg-purple-800/50 hover:bg-purple-700/50 transition-colors duration-300"
                >
                  <FaUser className="text-purple-300" />
                  <span>Profile</span>
                </Link>
                <Link 
                  to="/friends" 
                  className="flex items-center space-x-3 py-2 px-4 rounded-lg bg-purple-800/50 hover:bg-purple-700/50 transition-colors duration-300"
                >
                  <FaUserFriends className="text-purple-300" />
                  <span>Friends</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-3 py-2 px-4 rounded-lg bg-purple-800/50 hover:bg-purple-700/50 transition-colors duration-300"
                >
                  <FaSignOutAlt className="text-purple-300" />
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </motion.div>
        </>
      ) : (
        <></>
        // Display nothing if no user is found
        // <p className="text-center mt-4 text-gray-500">Please log in to see the sidebar menu.</p>
      )}
    </div>
  )
}

export default Header
