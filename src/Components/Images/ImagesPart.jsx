'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiZoomIn, FiZoomOut, FiDownload } from 'react-icons/fi'

// Placeholder images (replace with your actual images)
const images = [
  'https://cdn.discordapp.com/attachments/852976891911995433/1299360076695605350/IMG_20241025_191146_345.jpg?ex=671ceadf&is=671b995f&hm=68c294677dc6aa3c32e72378566f9b346a716d6db6cda73c5e53581e55c59580&',
  "https://cdn.discordapp.com/attachments/852976891911995433/1299360077236666368/IMG_20241025_191124_102.jpg?ex=671ceadf&is=671b995f&hm=bcbda456ea2b81b5ef5d7fc5d7327cb961fa0f980da8941f24b07d0f4d397ad7&",
  "https://cdn.discordapp.com/attachments/852976891911995433/1299360077651906571/IMG_20241025_191040_794.jpg?ex=671ceadf&is=671b995f&hm=bc9c5324154771dd0e6e99ab40469d01e6aca001c4c02c661e2de4b393c8ffcb&",
  "https://cdn.discordapp.com/attachments/852976891911995433/1299360076984750101/IMG_20241025_191138_427.jpg?ex=671ceadf&is=671b995f&hm=40fb958ec14d4ec7564dfaa9a745e4a65284085d22c83becbdf9d8f24af4c470&",
  // Add other image URLs here
];

export default function ImagesPart() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [isZoomed, setIsZoomed] = useState(false)

  const handleImageClick = (image) => {
    setSelectedImage(image)
    setIsZoomed(false)
  }

  const handleCloseModal = () => {
    setSelectedImage(null)
    setIsZoomed(false)
  }

  const toggleZoom = () => {
    setIsZoomed(!isZoomed)
  }

  const handleDownload = async () => {
    if (selectedImage) {
      try {
        const response = await fetch(selectedImage)
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = 'image.jpg' // You can customize the filename here
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        window.URL.revokeObjectURL(url)
      } catch (error) {
        console.error('Error downloading image:', error)
      }
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Animated Text */}
      <motion.p
        className="text-center text-lg text-gray-300 mb-8"
        initial={{ opacity: 0, scale: 0.9 }} // Initial state
        animate={{ opacity: 1, scale: 1 }} // Animate to this state
        exit={{ opacity: 0, scale: 0.9 }} // Exit state
        transition={{ duration: 0.5 }} // Duration of the animation
        style={{
          textShadow: "0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px rgba(0, 153, 255, 0.5)",
        }}
      >
        A collection of moments that define our journey, captured beautifully.
      </motion.p>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
        {images.map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleImageClick(image)}
          >
            <img 
              src={image} 
              alt={`Image ${index + 1}`} 
              className="w-full h-48 object-cover rounded-lg cursor-pointer" 
            />
          </motion.div>
        ))}
      </div>

      {/* Full-size Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={handleCloseModal}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={selectedImage}
                alt="Full-size image"
                className={`max-w-full max-h-[90vh] object-contain ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
                style={{ 
                  transform: isZoomed ? 'scale(1.5)' : 'scale(1)',
                  transition: 'transform 0.3s ease-in-out'
                }}
                onClick={toggleZoom}
              />
              <button
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full"
                onClick={handleCloseModal}
                aria-label="Close modal"
              >
                <FiX size={24} />
              </button>
              <button
                className="absolute bottom-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full"
                onClick={toggleZoom}
                aria-label={isZoomed ? "Zoom out" : "Zoom in"}
              >
                {isZoomed ? <FiZoomOut size={24} /> : <FiZoomIn size={24} />}
              </button>
              <button
                className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 p-2 rounded-full"
                onClick={handleDownload}
                aria-label="Download image"
              >
                <FiDownload size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
