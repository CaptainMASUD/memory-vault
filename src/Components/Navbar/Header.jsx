'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaUser, FaSignOutAlt, FaTimes, FaUserFriends } from 'react-icons/fa'
import { useNavigate, Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
let Ayan = "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1731670870/memory%20vault/pics/xqhgyihmetsp7is7jm9h.jpg"
let Shohely = "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1731670868/memory%20vault/pics/z3j6w5quu9jc4hupw1qh.jpg"
let faysal = "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1731670867/memory%20vault/pics/gxtp6m9t5tyxbsbau1oa.jpg"
let Surjya = "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1731670866/memory%20vault/pics/ewh3hy2v8mowseqopihm.jpg"
let privan = "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1731670866/memory%20vault/pics/xbt2piopycdcetzveszf.jpg"
let Mahfuzzz = "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1731670866/memory%20vault/pics/icok6esy6smdcke2dndl.jpg"
let masud = "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1731670865/memory%20vault/pics/yk9yjiyhzzfzgs7vh6kv.jpg"
let Rumi = "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1731670865/memory%20vault/pics/a226rx9gmr9mbebehglz.jpg"
let Nova = "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1731670864/memory%20vault/pics/chgcn1fa0b1ktvc3ghws.jpg"
let Himel = "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1731670863/memory%20vault/pics/basiwx8isskm6ixbmmbr.jpg"
let Jahin = "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1731670863/memory%20vault/pics/lcnbqxjgzeqhbygvcs36.jpg"

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)

  const credentials = [
    { email: 'masudulalam972@gmail.com', password: '222-15-6072', profileImage: masud },
    { email: 'nirjon853@gmail.com', password: '222-15-6149' , profileImage: Ayan },
    { email: 'nurtahmimahmed@gmail.com', password: '222-15-6217', profileImage: privan },
    { email: 'tasnianaima@gmail.com', password: '222-15-6313', profileImage: Nova },
    { email: 'kft776@gmail.com', password: '222-15-6178', profileImage: Himel },
    { email: 'rrahmanmahfuz007@gmail.com', password: '222-15-6522', profileImage: Mahfuzzz },
    { email: 'shahedrumi98@gmail.com', password: '222-15-6485', profileImage: Rumi },
    { email: 'ahmed15-6195@s.diu.edu.bd', password: '222-15-6195', profileImage: faysal },
    { email: 'shohelyislamsuchi@gmail.com', password: '222-15-6493', profileImage: Shohely },
    { email: 'arhabjahin.b@gmail.com', password: '222-15-6452', profileImage: Jahin },
    { email: 'bhowmickneeds@gmail.com', password: '222-15-6382', profileImage: Surjya },
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
