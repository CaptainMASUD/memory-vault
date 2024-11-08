import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiUser } from 'react-icons/fi';
import Header from '../Navbar/Header';

const friends = [
  { id: 1, name: 'John Doe', email: 'johndoe@example.com', phone: '123-456-7890', profileImage: 'https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/454467903_3701996050042630_3647676458570200956_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEugYkhPJNPIYbw-MQgubWdzwNOr6LzSOXPA06vovNI5TyJdCCZ2c3OBKL_Tk_i2l1hvnF2g4XZsRWLmRJtrAyT&_nc_ohc=r0uhO7uEKCoQ7kNvgGYZbLf&_nc_zt=23&_nc_ht=scontent.fdac41-1.fna&_nc_gid=ARJQoDPYCgfAEX182ZwABPZ&oh=00_AYDzAm-Stx01J1xpDHEptw2QMPAXJvsoVZmD6Z4q4BmXGw&oe=67336F4F' },
  { id: 1, name: 'John Doe', email: 'johndoe@example.com', phone: '123-456-7890', profileImage: 'https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/454467903_3701996050042630_3647676458570200956_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEugYkhPJNPIYbw-MQgubWdzwNOr6LzSOXPA06vovNI5TyJdCCZ2c3OBKL_Tk_i2l1hvnF2g4XZsRWLmRJtrAyT&_nc_ohc=r0uhO7uEKCoQ7kNvgGYZbLf&_nc_zt=23&_nc_ht=scontent.fdac41-1.fna&_nc_gid=ARJQoDPYCgfAEX182ZwABPZ&oh=00_AYDzAm-Stx01J1xpDHEptw2QMPAXJvsoVZmD6Z4q4BmXGw&oe=67336F4F' },
  { id: 1, name: 'John Doe', email: 'johndoe@example.com', phone: '123-456-7890', profileImage: 'https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/454467903_3701996050042630_3647676458570200956_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEugYkhPJNPIYbw-MQgubWdzwNOr6LzSOXPA06vovNI5TyJdCCZ2c3OBKL_Tk_i2l1hvnF2g4XZsRWLmRJtrAyT&_nc_ohc=r0uhO7uEKCoQ7kNvgGYZbLf&_nc_zt=23&_nc_ht=scontent.fdac41-1.fna&_nc_gid=ARJQoDPYCgfAEX182ZwABPZ&oh=00_AYDzAm-Stx01J1xpDHEptw2QMPAXJvsoVZmD6Z4q4BmXGw&oe=67336F4F' },
  { id: 1, name: 'John Doe', email: 'johndoe@example.com', phone: '123-456-7890', profileImage: 'https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/454467903_3701996050042630_3647676458570200956_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEugYkhPJNPIYbw-MQgubWdzwNOr6LzSOXPA06vovNI5TyJdCCZ2c3OBKL_Tk_i2l1hvnF2g4XZsRWLmRJtrAyT&_nc_ohc=r0uhO7uEKCoQ7kNvgGYZbLf&_nc_zt=23&_nc_ht=scontent.fdac41-1.fna&_nc_gid=ARJQoDPYCgfAEX182ZwABPZ&oh=00_AYDzAm-Stx01J1xpDHEptw2QMPAXJvsoVZmD6Z4q4BmXGw&oe=67336F4F' },
  { id: 1, name: 'John Doe', email: 'johndoe@example.com', phone: '123-456-7890', profileImage: 'https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/454467903_3701996050042630_3647676458570200956_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEugYkhPJNPIYbw-MQgubWdzwNOr6LzSOXPA06vovNI5TyJdCCZ2c3OBKL_Tk_i2l1hvnF2g4XZsRWLmRJtrAyT&_nc_ohc=r0uhO7uEKCoQ7kNvgGYZbLf&_nc_zt=23&_nc_ht=scontent.fdac41-1.fna&_nc_gid=ARJQoDPYCgfAEX182ZwABPZ&oh=00_AYDzAm-Stx01J1xpDHEptw2QMPAXJvsoVZmD6Z4q4BmXGw&oe=67336F4F' },
  { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', phone: '987-654-3210', profileImage: 'https://via.placeholder.com/100' },
  
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
