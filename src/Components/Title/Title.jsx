import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

function Title() {
  const title = "Memory Vault";
  const quote = "Moments Fade, Memories Remain";
  
  // Array of colors for the hover effect
  const colors = [
    'rgb(255, 127, 80)',   // Coral
    'rgb(54, 162, 235)',   // Sky Blue
    'rgb(255, 206, 86)',   // Yellow
    'rgb(75, 192, 192)',    // Teal
    'rgb(153, 102, 255)',   // Purple
  ];

  return (
    <div className="flex flex-col  items-center text-center mt-0 bg-slate-900 p-8 shadow-md">
      {/* Animated Title with Hover Effect */}
      <div className="flex space-x-1">
        {title.split("").map((char, index) => (
          <motion.span
            key={index}
            className="text-4xl font-extrabold text-white cursor-pointer"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0, 1, 1],
              scale: [0.5, 1.1, 1],
            }}
            transition={{
              duration: 0.6,
              ease: [0.5, 0.05, 0.1, 0.3],
              delay: index * 0.2,
            }}
            whileHover={{
              scale: 1.3, // Increase size on hover
              color: colors[index % colors.length], // Change color instantly on hover
              textShadow: '0 0 10px rgba(255, 255, 255, 0.6)', // Add glow effect
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>

      {/* Responsive Animated Quote with Glowing Letters */}
      <motion.div
        className="relative mt-4 text-white flex items-center justify-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
      >
        <FaQuoteLeft className="text-gray-200 mr-2" />
        <div className="flex space-x-1 text-xs sm:text-sm md:text-base lg:text-lg font-medium">
          {quote.split("").map((char, index) => (
            <motion.span
              key={index}
              className="text-white"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: [0.5, 1, 0.5], color: ["#fff", "#f9a8d4", "#fff"] }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
                delay: index * 0.1,
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>
        <FaQuoteRight className="text-gray-200 ml-2" />
      </motion.div>
    </div>
  );
}

export default Title;
