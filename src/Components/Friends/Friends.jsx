import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiUser } from 'react-icons/fi';
import Header from '../Navbar/Header';
import { FaPaperclip } from "react-icons/fa";

const friends = [
  { id: 2, name: 'Privan', email: 'nurtahmimahmed@gmail.com', phone: '01855612703',bio : "", profileImage: '' },
  { id: 4, name: 'Masudul Alam', email: 'masudulalam972@gmail.com', phone: '01876039841',bio : "", profileImage: '' },
  { id: 1, name: 'Ayan Nandy Nirjon', email: 'johndoe@example.com', phone: '123-456-7890',bio : "", profileImage: '' },
  { id: 6, name: 'T M Shahed Rumi', email: 'shahedrumi98@gmail.com', phone: '01580849247',bio : "", profileImage: '' },
  { id: 7, name: 'MD.FAYSAL AHMED', email: 'ahmed15-6195@s.diu.edu.bd', phone: '01533342443',bio : "", profileImage: '' },
  { id: 3, name: 'Nova', email: 'tasnianaima@gmail.com', phone: '01709226361',bio : "", profileImage: '' },
  { id: 5, name: 'SM. Asif Arafat Himel', email: 'kft776@gmail.com', phone: '01797228898',bio : "", profileImage: '' },
  { id: 8, name: 'Shohely Islam ', email: 'shohelyislamsuchi@gmail.com', phone: '01892301044',bio : "", profileImage: '' },
  { id: 9, name: 'Arhab Jahin', email: 'arhabjahin.b@gmail.com', phone: '01911308923',bio : "", profileImage: '' },
  { id: 10, name: 'Surjya Bhowmick', email: 'bhowmickneeds@gmail.com', phone: '01531542940',bio : "", profileImage: '' },

  
  // ... Add more friend profiles here
];

function Friends() {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      
      {friends.map((friend) => (
        <motion.div
          key={friend.id}
          className=" shadow-sm   hover:shadow-xl duration-500 hover:shadow-purple-500 rounded-lg p-4 flex flex-col shadow-purple-500 items-center text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: friend.id * 0.1 }}
        >
          <img
            src={friend.profileImage}
            alt={`${friend.name}'s profile`}
            className="w-24 h-24 rounded-full mb-4"
          />
          <h2 className="text-lg font-semibold text-gray-200">{friend.name}</h2>
          <div className="text-sm text-gray-400 flex items-center justify-center gap-2 mt-1">
            <FiMail className="text-blue-500" />
            <span>{friend.email}</span>
          </div>
          <div className="text-sm text-gray-400 flex items-center justify-center gap-2 mt-1">
            <FiPhone className="text-green-500" />
            <span>{friend.phone}</span>
          </div>
          <div className="text-sm text-gray-400 flex items-center justify-center gap-2 mt-1">
            <FaPaperclip className="text-orange-500" />
            <span>{friend.bio}</span>
          </div>
          <button className="mt-4 px-4 py-2 border border-purple-500 text-white rounded-lg flex items-center gap-2 hover:border-transparent hover:bg-purple-600">
            <FiUser />
            Contact
          </button>
        </motion.div>
      ))}
    </div>
  );
}

export default Friends;
