import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaSignOutAlt, FaEnvelope, FaPhone } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Profile() {
  const [currentUser, setCurrentUser] = useState(null)
  const navigate = useNavigate()

  const credentials = [
    { email: 'masud.com', password: 's', profileImage: 'https://via.placeholder.com/150?text=Masud', name: 'Masud', phone: '123-456-7890' },
    { email: 'ayan@gmail.com', password: '6149' , profileImage: 'https://via.placeholder.com/150?text=User2', name: 'User Two', phone: '234-567-8901' },
    { email: 'user3@example.com', password: 'password3', profileImage: 'https://via.placeholder.com/150?text=User3', name: 'User Three', phone: '345-678-9012' },
  ]

  useEffect(() => {
    const storedEmail = localStorage.getItem('email')
    const storedPassword = localStorage.getItem('password')

    const user = credentials.find(
      (cred) => cred.email === storedEmail && cred.password === storedPassword
    )

    if (user) {
      setCurrentUser(user)
    } else {
      toast.error('No valid user found. Please log in.')
      navigate('/login')
    }
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    setCurrentUser(null)
    navigate('/login')
    window.location.reload() // Reloads the page to clear any user-specific data
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <ToastContainer />
      {currentUser ? (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 p-8 rounded-lg shadow-lg w-80 text-center text-white"
        >
          {/* Profile Picture */}
          <img
            src={currentUser.profileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto border-4 border-purple-500"
          />
          <h1 className="mt-4 text-2xl font-semibold text-purple-300">{currentUser.name}</h1>
          
          {/* Profile Details */}
          <p className="mt-2 text-gray-400">
            <FaEnvelope className="inline-block mr-2 text-purple-400" /> {currentUser.email}
          </p>
          <p className="mt-2 text-gray-400">
            <FaPhone className="inline-block mr-2 text-purple-400" /> {currentUser.phone}
          </p>

          {/* Centered Logout Button */}
          <button
            onClick={handleLogout}
            className="mt-6 py-2 px-6 bg-purple-600 rounded-full text-white flex items-center justify-center space-x-2 hover:bg-purple-700 transition duration-300 mx-auto"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </motion.div>
      ) : (
        <p className="text-center text-gray-500">Loading...</p>
      )}
    </div>
  )
}

export default Profile
