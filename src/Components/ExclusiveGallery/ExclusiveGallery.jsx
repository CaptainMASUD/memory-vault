'use client'

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiImage, FiCamera, FiVideo, FiX, FiDownload, FiMaximize2 } from 'react-icons/fi'

// Sample data - replace with your actual Cloudinary image and video data
const media = [
  { id: 1, src: 'https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg', type: 'image' },
  { id: 2, src: 'https://res.cloudinary.com/demo/image/upload/v1434028606/sample.png', type: 'image' },
  { id: 3, src: 'https://res.cloudinary.com/demo/video/upload/v1389969539/sample.mp4', type: 'video' },
  { id: 4, src: 'https://res.cloudinary.com/demo/image/upload/v1371282172/sample.jpg', type: 'image' },
  { id: 5, src: 'https://res.cloudinary.com/demo/image/upload/v1399439106/sample.jpg', type: 'image' },
  { id: 6, src: 'https://res.cloudinary.com/demo/video/upload/v1389969539/dog.mp4', type: 'video' },
  { id: 7, src: 'https://res.cloudinary.com/demo/image/upload/v1425837431/sample.png', type: 'image' },
  { id: 8, src: 'https://res.cloudinary.com/demo/image/upload/v1493026402/sample.jpg', type: 'image' },
]

export default function Component() {
  const [filter, setFilter] = useState('all')
  const [selectedMedia, setSelectedMedia] = useState(null)
  const videoRef = useRef(null)

  const filteredMedia = media.filter(item => filter === 'all' || item.type === filter)

  const handleMediaClick = (item) => {
    setSelectedMedia(item)
  }

  const handleClose = () => {
    setSelectedMedia(null)
  }

  const handleDownload = (src) => {
    window.open(src, '_blank')
  }

  return (
    <div className="min-h-screen  p-4">
      <h1 className="text-3xl font-bold text-center text-white mb-4">Cloudinary Gallery</h1>
      
      <div className="flex justify-center space-x-2 mb-4">
        <FilterButton icon={<FiImage />} label="All" onClick={() => setFilter('all')} active={filter === 'all'} />
        <FilterButton icon={<FiCamera />} label="Images" onClick={() => setFilter('image')} active={filter === 'image'} />
        <FilterButton icon={<FiVideo />} label="Videos" onClick={() => setFilter('video')} active={filter === 'video'} />
      </div>

      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2"
        layout
      >
        <AnimatePresence>
          {filteredMedia.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative group cursor-pointer aspect-square"
              onClick={() => handleMediaClick(item)}
            >
              <motion.img
                src={item.type === 'video' ? item.src.replace('mp4', 'jpg') : item.src}
                alt={`Gallery item ${item.id}`}
                className="w-full h-full object-cover rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <FiVideo className="text-white text-4xl opacity-70" />
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={handleClose}
          >
            <div className="relative w-full max-w-6xl max-h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              {selectedMedia.type === 'image' ? (
                <div className="relative w-full h-full">
                  <motion.img
                    src={selectedMedia.src}
                    alt={`Full size image ${selectedMedia.id}`}
                    className="w-full h-full object-contain"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute top-2 right-2 flex space-x-2">
                    <button
                      className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleDownload(selectedMedia.src)
                      }}
                    >
                      <FiDownload />
                    </button>
                    <button
                      className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors"
                      onClick={handleClose}
                    >
                      <FiX />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="relative w-full max-w-4xl aspect-video">
                  <video
                    ref={videoRef}
                    src={selectedMedia.src}
                    className="w-full h-full object-contain"
                    controls
                    controlsList="nodownload"
                  />
                  <div className="absolute top-2 right-2 flex space-x-2">
                    <button
                      className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleDownload(selectedMedia.src)
                      }}
                    >
                      <FiDownload />
                    </button>
                    <button
                      className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors"
                      onClick={handleClose}
                    >
                      <FiX />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function FilterButton({ icon, label, onClick, active }) {
  return (
    <motion.button
      onClick={onClick}
      className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm text-white ${
        active ? 'bg-blue-600' : 'bg-gray-700'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
      <span>{label}</span>
    </motion.button>
  )
}