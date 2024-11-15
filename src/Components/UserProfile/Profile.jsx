import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSignOutAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import the profile images
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

function Profile() {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  // Mapping credentials and profile image data
  const credentials = [
    { email: 'masudulalam972@gmail.com', password: '222-15-6072', name: 'Masudul Alam', image: masud, phone: '01876039841' },
    { email: 'nirjon853@gmail.com', password: '222-15-6149', name: 'Ayan Nandy Nirjon', image: Ayan, phone: '123-456-7890' },
    { email: 'nurtahmimahmed@gmail.com', password: '222-15-6217', name: 'Privan', image: privan, phone: '01855612703' },
    { email: 'tasnianaima@gmail.com', password: '222-15-6313', name: 'Nova', image: Nova, phone: '01709226361' },
    { email: 'kft776@gmail.com', password: '222-15-6178', name: 'SM. Asif Arafat Himel', image: Himel, phone: '01797228898' },
    { email: 'rrahmanmahfuz007@gmail.com', password: '222-15-6522', name: 'Mahfuz', image: Mahfuzzz, phone: '01897063745' },
    { email: 'shahedrumi98@gmail.com', password: '222-15-6485', name: 'T M Shahed Rumi', image: Rumi, phone: '01580849247' },
    { email: 'ahmed15-6195@s.diu.edu.bd', password: '222-15-6195', name: 'MD.FAYSAL AHMED', image: faysal, phone: '01533342443' },
    { email: 'shohelyislamsuchi@gmail.com', password: '222-15-6493', name: 'Shohely Islam', image: Shohely, phone: '01892301044' },
    { email: 'arhabjahin.b@gmail.com', password: '222-15-6452', name: 'Arhab Jahin', image: Jahin, phone: '01911308923' },
    { email: 'bhowmickneeds@gmail.com', password: '222-15-6382', name: 'Surjya Bhowmick', image: Surjya, phone: '01531542940' },
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
