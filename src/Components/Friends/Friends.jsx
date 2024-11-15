import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiUser } from 'react-icons/fi';
import { FaPaperclip } from "react-icons/fa";
import masud from "../../images/profiles/pics/Masud.jpg"
import rumi from "../../images/profiles/pics/rumi.jpg"
import jahin from "../../images/profiles/pics/Arhab Jahin.jpg"
import Faysal from "../../images/profiles/pics/Faysal.jpg"
import Mahfuz from "../../images/profiles/pics/Mahfuz.jpg"
import Nova from "../../images/profiles/pics/Nova.jpg"
import Ayan from "../../images/profiles/pics/Ayan .jpg"
import SURJYA from "../../images/profiles/pics/SURJYA BHOWMICK.jpg"
import himel from "../../images/profiles/pics/Hmu - Panda Vai.jpg"
import privan from "../../images/profiles/pics/Tahmim Ahmed.jpg"
import Shohely from "../../images/profiles/pics/Shohely Islam.jpg"

const friends = [
  { id: 2, name: 'Privan', email: 'nurtahmimahmed@gmail.com', phone: '01855612703', bio: "Look deep into nature, and then you will understand everything better. Doesn't matter who it is? Or what it is?"    , profileImage: privan },
  { id: 4, name: 'Masudul Alam', email: 'masudulalam972@gmail.com', phone: '01876039841', bio: "playing games doesn't only relief the pressure but also it makes us happy ", profileImage: masud },
  { id: 1, name: 'Ayan Nandy Nirjon', email: 'johndoe@example.com', phone: '123-456-7890', bio: "Fortes Fortuna Adiuvat", profileImage:  Ayan},
  { id: 6, name: 'T M Shahed Rumi', email: 'shahedrumi98@gmail.com', phone: '01580849247', bio: "Following my heart wherever it leads.", profileImage:  rumi},
  { id: 7, name: 'MD.FAYSAL AHMED', email: 'ahmed15-6195@s.diu.edu.bd', phone: '01533342443', bio: "", profileImage:  Faysal},
  { id: 3, name: 'Nova', email: 'tasnianaima@gmail.com', phone: '01709226361', bio: "", profileImage:  Nova},
  { id: 5, name: 'SM. Asif Arafat Himel', email: 'kft776@gmail.com', phone: '01797228898', bio: "Some need words to feel aliveI need only a melody to unlock the poetry within me...", profileImage: himel },
  { id: 8, name: 'Shohely Islam', email: 'shohelyislamsuchi@gmail.com', phone: '01892301044', bio: "", profileImage:  Shohely},
  { id: 9, name: 'Arhab Jahin', email: 'arhabjahin.b@gmail.com', phone: '01911308923', bio: "", profileImage:  jahin},
  { id: 10, name: 'Surjya Bhowmick', email: 'bhowmickneeds@gmail.com', phone: '01531542940', bio: "Expect low, Be happy. ", profileImage: SURJYA },
  { id: 101, name: 'Mahfuzzz', email: 'rrahmanmahfuz007@gmail.com', phone: '01997750844', bio: "আমার কি দোষ, খালি পাপ জমাই 🐸", profileImage: Mahfuz },
];

function Friends() {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {friends.map((friend) => (
        <motion.div
          key={friend.id}
          className="hover:shadow-2xl shadow-lg rounded-lg p-6 flex flex-col items-center text-center duration-300"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: friend.id * 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.img
            src={friend.profileImage || 'https://via.placeholder.com/100'}
            alt={`${friend.name}'s profile`}
            className="w-24 h-24 rounded-full mb-3"
            whileHover={{ rotate: 5 }}
          />
          <motion.h2
            className="text-xl font-semibold text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 * friend.id }}
          >
            {friend.name}
          </motion.h2>
          <div className="text-sm text-gray-400 flex items-center justify-center gap-2 mt-1 animate-fade-in">
            <FiMail className="text-blue-500" />
            <motion.span
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {friend.email}
            </motion.span>
          </div>
          <div className="text-sm text-gray-400 flex items-center justify-center gap-2 mt-1 animate-fade-in">
            <FiPhone className="text-green-500" />
            <motion.span
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {friend.phone}
            </motion.span>
          </div>
          <div className="text-sm text-gray-400 flex items-center justify-center gap-2 mt-1">
            <FaPaperclip className="text-orange-500" />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {friend.bio || 'No bio available'}
            </motion.span>
          </div>
          <motion.button
            className="mt-4 px-4 py-2 text-white rounded-lg flex items-center gap-2 border border-purple-500 hover:bg-purple-500 duration-300 hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <FiUser />
            Contact
          </motion.button>
        </motion.div>
      ))}
    </div>
  );
}

export default Friends;
