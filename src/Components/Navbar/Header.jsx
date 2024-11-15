'use client'

import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'
import { FaUser, FaSignOutAlt, FaTimes, FaUserFriends } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const profileImages = {
  'masudulalam972@gmail.com': "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1731670865/memory%20vault/pics/yk9yjiyhzzfzgs7vh6kv.jpg",
  'nirjon853@gmail.com': "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1731670870/memory%20vault/pics/xqhgyihmetsp7is7jm9h.jpg",
  'nurtahmimahmed@gmail.com': "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1731670866/memory%20vault/pics/xbt2piopycdcetzveszf.jpg",
  'tasnianaima@gmail.com': "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1731670864/memory%20vault/pics/chgcn1fa0b1ktvc3ghws.jpg",
  'kft776@gmail.com': "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1731670863/memory%20vault/pics/basiwx8isskm6ixbmmbr.jpg",
  'rrahmanmahfuz007@gmail.com': "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1731670866/memory%20vault/pics/icok6esy6smdcke2dndl.jpg",
  'shahedrumi98@gmail.com': "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1731670865/memory%20vault/pics/a226rx9gmr9mbebehglz.jpg",
  'ahmed15-6195@s.diu.edu.bd': "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1731670867/memory%20vault/pics/gxtp6m9t5tyxbsbau1oa.jpg",
  'shohelyislamsuchi@gmail.com': "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1731670868/memory%20vault/pics/z3j6w5quu9jc4hupw1qh.jpg",
  'arhabjahin.b@gmail.com': "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1731670863/memory%20vault/pics/lcnbqxjgzeqhbygvcs36.jpg",
  'bhowmickneeds@gmail.com': "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1731670866/memory%20vault/pics/ewh3hy2v8mowseqopihm.jpg",
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)

  const credentials = useMemo(() => [
    { email: 'masudulalam972@gmail.com', password: '222-15-6072' },
    { email: 'nirjon853@gmail.com', password: '222-15-6149' },
    { email: 'nurtahmimahmed@gmail.com', password: '222-15-6217' },
    { email: 'tasnianaima@gmail.com', password: '222-15-6313' },
    { email: 'kft776@gmail.com', password: '222-15-6178' },
    { email: 'rrahmanmahfuz007@gmail.com', password: '222-15-6522' },
    { email: 'shahedrumi98@gmail.com', password: '222-15-6485' },
    { email: 'ahmed15-6195@s.diu.edu.bd', password: '222-15-6195' },
    { email: 'shohelyislamsuchi@gmail.com', password: '222-15-6493' },
    { email: 'arhabjahin.b@gmail.com', password: '222-15-6452' },
    { email: 'bhowmickneeds@gmail.com', password: '222-15-6382' },
  ], [])

  useEffect(() => {
    const storedEmail = localStorage.getItem('email')
    const storedPassword = localStorage.getItem('password')

    const user = credentials.find(
      (cred) => cred.email === storedEmail && cred.password === storedPassword
    )

    if (user) {
      setCurrentUser(user)
      setIsOpen(true)
    }
  }, [credentials])

  const toggleSidebar = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  const handleLogout = useCallback(() => {
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
  }, [])

  if (!currentUser) return null

  const navItems = [
    { to: "/", icon: FaUser, label: "Home" },
    { to: "/profile", icon: FaUser, label: "Profile" },
    { to: "/friends", icon: FaUserFriends, label: "Friends" },
  ]

  return (
    <div className="relative">
      <ToastContainer />
      <button 
        onClick={toggleSidebar} 
        className="fixed top-4 left-4 z-50 p-[3px] bg-purple-600 rounded-full text-white hover:bg-purple-700 transition-colors duration-300"
        aria-label="Toggle sidebar"
      >
        <img
          src={profileImages[currentUser.email]}
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      </button>

      <motion.aside
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? '0%' : '-100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 h-full w-80 z-40 bg-gradient-to-br from-purple-900/80 to-indigo-900/80 backdrop-blur-lg text-white shadow-lg"
      >
        <div className="h-full flex flex-col">
          <div className="flex justify-end p-4">
            <button onClick={toggleSidebar} className="text-gray-300 hover:text-white transition-colors duration-300" aria-label="Close sidebar">
              <FaTimes size={24} />
            </button>
          </div>

          <div className="flex flex-col items-center p-6 border-b border-purple-700/50">
            <img
              className="w-24 h-24 rounded-full border-4 border-purple-500 shadow-lg"
              src={profileImages[currentUser.email]}
              alt="Profile"
            />
            <p className="mt-4 text-xl font-semibold text-purple-200">{currentUser.email}</p>
          </div>

          <nav className="flex-grow p-6 space-y-4">
            {navItems.map(({ to, icon: Icon, label }) => (
              <Link 
                key={to}
                to={to} 
                className="flex items-center space-x-3 py-2 px-4 rounded-lg bg-purple-800/50 hover:bg-purple-700/50 transition-colors duration-300"
              >
                <Icon className="text-purple-300" aria-hidden="true" />
                <span>{label}</span>
              </Link>
            ))}
            <button
              onClick={handleLogout}
              className="flex items-center space-x-3 py-2 px-4 rounded-lg bg-purple-800/50 hover:bg-purple-700/50 transition-colors duration-300 w-full text-left"
            >
              <FaSignOutAlt className="text-purple-300" aria-hidden="true" />
              <span>Logout</span>
            </button>
          </nav>
        </div>
      </motion.aside>
    </div>
  )
}