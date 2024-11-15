import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSignOutAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import the profile images
import masud from "../../images/profiles/pics/Masud.jpg";
import rumi from "../../images/profiles/pics/rumi.jpg";
import jahin from "../../images/profiles/pics/Arhab Jahin.jpg";
import Faysal from "../../images/profiles/pics/Faysal.jpg";
import Mahfuz from "../../images/profiles/pics/Mahfuz.jpg";
import Nova from "../../images/profiles/pics/Nova.jpg";
import Ayan from "../../images/profiles/pics/Ayan .jpg";
import SURJYA from "../../images/profiles/pics/SURJYA BHOWMICK.jpg";
import himel from "../../images/profiles/pics/Hmu - Panda Vai.jpg";
import privan from "../../images/profiles/pics/Tahmim Ahmed.jpg";
import Shohely from "../../images/profiles/pics/Shohely Islam.jpg";

function Profile() {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  // Mapping credentials and profile image data
  const credentials = [
    { email: 'masudulalam972@gmail.com', password: '222-15-6072', name: 'Masudul Alam', image: masud, phone: '01876039841' },
    { email: 'nirjon853@gmail.com', password: '222-15-6149', name: 'Ayan Nandy Nirjon', image: Ayan, phone: '123-456-7890' },
    { email: 'nurtahmimahmed@gmail.com', password: '222-15-6217', name: 'Privan', image: privan, phone: '01855612703' },
    { email: 'tasnianaima@gmail.com', password: '222-15-6313', name: 'Nova', image: Nova, phone: '01709226361' },
    { email: 'kft776@gmail.com', password: '222-15-6178', name: 'SM. Asif Arafat Himel', image: himel, phone: '01797228898' },
    { email: 'rrahmanmahfuz007@gmail.com', password: '222-15-6522', name: 'Mahfuz', image: Mahfuz, phone: '01897063745' },
    { email: 'shahedrumi98@gmail.com', password: '222-15-6485', name: 'T M Shahed Rumi', image: rumi, phone: '01580849247' },
    { email: 'ahmed15-6195@s.diu.edu.bd', password: '222-15-6195', name: 'MD.FAYSAL AHMED', image: Faysal, phone: '01533342443' },
    { email: 'shohelyislamsuchi@gmail.com', password: '222-15-6493', name: 'Shohely Islam', image: Shohely, phone: '01892301044' },
    { email: 'arhabjahin.b@gmail.com', password: '222-15-6452', name: 'Arhab Jahin', image: jahin, phone: '01911308923' },
    { email: 'bhowmickneeds@gmail.com', password: '222-15-6382', name: 'Surjya Bhowmick', image: SURJYA, phone: '01531542940' },
  ];

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    const user = credentials.find(
      (cred) => cred.email === storedEmail && cred.password === storedPassword
    );

    if (user) {
      setCurrentUser(user);
    } else {
      toast.error('No valid user found. Please log in.');
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    setCurrentUser(null);
    navigate('/login');
    window.location.reload(); // Reloads the page to clear any user-specific data
  };

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
            src={currentUser.image}
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
  );
}

export default Profile;
