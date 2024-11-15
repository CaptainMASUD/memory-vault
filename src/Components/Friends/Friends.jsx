import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiUser } from 'react-icons/fi';
import { FaPaperclip } from "react-icons/fa";



let img1 = "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1731670870/memory%20vault/pics/xqhgyihmetsp7is7jm9h.jpg"
let img2 = "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1731670868/memory%20vault/pics/z3j6w5quu9jc4hupw1qh.jpg"
let img3 = "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1731670867/memory%20vault/pics/gxtp6m9t5tyxbsbau1oa.jpg"
let img4 = "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1731670866/memory%20vault/pics/ewh3hy2v8mowseqopihm.jpg"
let img5 = "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1731670866/memory%20vault/pics/xbt2piopycdcetzveszf.jpg"
let img6 = "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1731670866/memory%20vault/pics/icok6esy6smdcke2dndl.jpg"
let img7 = "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1731670865/memory%20vault/pics/yk9yjiyhzzfzgs7vh6kv.jpg"
let img8 = "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1731670865/memory%20vault/pics/a226rx9gmr9mbebehglz.jpg"
let img9 = "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1731670864/memory%20vault/pics/chgcn1fa0b1ktvc3ghws.jpg"
let img10 = "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1731670863/memory%20vault/pics/basiwx8isskm6ixbmmbr.jpg"
let img11 = "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1731670863/memory%20vault/pics/lcnbqxjgzeqhbygvcs36.jpg"



const friends = [
  { id: 2, name: 'Privan', email: 'nurtahmimahmed@gmail.com', phone: '01855612703', bio: "Look deep into nature, and then you will understand everything better. Doesn't matter who it is? Or what it is?"    , profileImage: img5 },
  { id: 4, name: 'Masudul Alam', email: 'masudulalam972@gmail.com', phone: '01876039841', bio: "playing games doesn't only relief the pressure but also it makes us happy ", profileImage: img7 },
  { id: 1, name: 'Ayan Nandy Nirjon', email: 'johndoe@example.com', phone: '123-456-7890', bio: "Fortes Fortuna Adiuvat", profileImage:  img1},
  { id: 6, name: 'T M Shahed Rumi', email: 'shahedrumi98@gmail.com', phone: '01580849247', bio: "Following my heart wherever it leads.", profileImage:  img8},
  { id: 7, name: 'MD.FAYSAL AHMED', email: 'ahmed15-6195@s.diu.edu.bd', phone: '01533342443', bio: "", profileImage:  img3},
  { id: 3, name: 'Nova', email: 'tasnianaima@gmail.com', phone: '01709226361', bio: "", profileImage:  img9},
  { id: 5, name: 'SM. Asif Arafat Himel', email: 'kft776@gmail.com', phone: '01797228898', bio: "Some need words to feel aliveI need only a melody to unlock the poetry within me...", profileImage: img10 },
  { id: 8, name: 'Shohely Islam', email: 'shohelyislamsuchi@gmail.com', phone: '01892301044', bio: "", profileImage:  img2},
  { id: 9, name: 'Arhab Jahin', email: 'arhabjahin.b@gmail.com', phone: '01911308923', bio: "", profileImage:  img11},
  { id: 10, name: 'Surjya Bhowmick', email: 'bhowmickneeds@gmail.com', phone: '01531542940', bio: "Expect low, Be happy. ", profileImage: img4 },
  { id: 11, name: 'Mahfuzzz', email: 'rrahmanmahfuz007@gmail.com', phone: '01997750844', bio: "আমার কি দোষ, খালি পাপ জমাই 🐸", profileImage: img6 },
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
