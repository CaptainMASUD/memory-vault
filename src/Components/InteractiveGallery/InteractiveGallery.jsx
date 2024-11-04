import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  { id: 1, src: 'https://placekitten.com/600/400', title: 'Nature', top: '5%', left: '10%', rotate: '-5deg' },
  { id: 2, src: 'https://teabazarbd.com/wp-content/uploads/2023/02/best-tea-of-sreemangal-tea-bazar-bd-1024x576.webp', title: 'City', top: '15%', left: '35%', rotate: '3deg' },
  { id: 3, src: 'https://placekitten.com/650/450', title: 'Beach', top: '40%', left: '5%', rotate: '7deg' },
  { id: 4, src: 'https://teabazarbd.com/wp-content/uploads/2023/02/best-tea-of-sreemangal-tea-bazar-bd-1024x576.webp', title: 'Mountain', top: '25%', left: '60%', rotate: '-8deg' },
  { id: 5, src: 'https://placekitten.com/700/500', title: 'Forest', top: '55%', left: '40%', rotate: '4deg' },
  { id: 6, src: 'https://placekitten.com/720/520', title: 'Lake', top: '10%', left: '70%', rotate: '-2deg' },
  { id: 7, src: 'https://teabazarbd.com/wp-content/uploads/2023/02/best-tea-of-sreemangal-tea-bazar-bd-1024x576.webp', title: 'River', top: '30%', left: '20%', rotate: '5deg' },
  { id: 8, src: 'https://placekitten.com/750/550', title: 'Desert', top: '65%', left: '15%', rotate: '10deg' },
  { id: 9, src: 'https://teabazarbd.com/wp-content/uploads/2023/02/best-tea-of-sreemangal-tea-bazar-bd-1024x576.webp', title: 'Garden', top: '45%', left: '75%', rotate: '-4deg' },
  { id: 10, src: 'https://placekitten.com/770/570', title: 'Meadow', top: '20%', left: '5%', rotate: '8deg' },
  { id: 11, src: 'https://placekitten.com/800/600', title: 'Snow', top: '75%', left: '50%', rotate: '-12deg' },
  { id: 12, src: 'https://teabazarbd.com/wp-content/uploads/2023/02/best-tea-of-sreemangal-tea-bazar-bd-1024x576.webp', title: 'Sunset', top: '5%', left: '50%', rotate: '15deg' },
];


const friends = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', phone: '123-456-7890', avatar: 'https://placekitten.com/100/100' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', phone: '234-567-8901', avatar: 'https://placekitten.com/101/101' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', phone: '345-678-9012', avatar: 'https://placekitten.com/102/102' },
  { id: 4, name: 'Diana Ross', email: 'diana@example.com', phone: '456-789-0123', avatar: 'https://placekitten.com/103/103' },
]

export default function InteractiveGallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentFriend, setCurrentFriend] = useState(0)

  const openModal = (image) => setSelectedImage(image)
  const closeModal = () => setSelectedImage(null)

  const nextImage = () => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id)
    const nextIndex = (currentIndex + 1) % images.length
    setSelectedImage(images[nextIndex])
  }

  const prevImage = () => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id)
    const prevIndex = (currentIndex - 1 + images.length) % images.length
    setSelectedImage(images[prevIndex])
  }

  const nextFriend = () => setCurrentFriend((prev) => (prev + 1) % friends.length)
  const prevFriend = () => setCurrentFriend((prev) => (prev - 1 + friends.length) % friends.length)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-800 p-8 relative overflow-hidden">
      <h1 className="text-4xl font-bold text-center md:mb-12 mb-40 text-indigo-800">Interactive Image Gallery</h1>

      {/* Overlapping images */}
      {images.map((image) => (
        <motion.div
          key={image.id}
          className="absolute cursor-pointer mt-20"
          style={{ top: image.top, left: image.left, rotate: image.rotate }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05, zIndex: 10 }}
          onClick={() => openModal(image)}
        >
          <div className="bg-white p-2 rounded-lg shadow-lg transform transition-transform duration-300 hover:shadow-xl">
            <img src={image.src} alt={image.title} className="rounded w-[300px] h-[200px] object-cover" />
            <h2 className="text-xl font-semibold mt-2 text-indigo-700">{image.title}</h2>
          </div>
        </motion.div>
      ))}

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-4 max-w-3xl w-full mx-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-indigo-800">{selectedImage.title}</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="rounded-lg w-full h-auto"
              />
              <div className="flex justify-between mt-4">
                <button
                  onClick={prevImage}
                  className="bg-indigo-500 text-white p-2 rounded-full hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="bg-indigo-500 text-white p-2 rounded-full hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Friends Card */}
      <div className="flex justify-center">
      <motion.div
        className="fixed bottom-8  transform -translate-x-1/2 w-full  max-w-2xl z-20 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="bg-gray-900 rounded-2xl shadow-2xl p-6">
          {/* <h2 className="text-2xl font-bold mb-4 text-indigo-800 text-center">Friends</h2> */}
          <div className="flex items-center justify-between">
            <button
              onClick={prevFriend}
              className="bg-indigo-500 text-white p-3 rounded-full hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-colors duration-300"
              aria-label="Previous friend"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex-grow mx-4">
              <div className="flex items-center space-x-4">
                <img
                  src={friends[currentFriend].avatar}
                  alt={friends[currentFriend].name}
                  className="w-20 h-20 rounded-full border-4 border-indigo-300"
                />
                <div>
                  <h3 className="text-xl font-semibold text-indigo-800">{friends[currentFriend].name}</h3>
                  <p className="text-indigo-600 text-sm">{friends[currentFriend].email}</p>
                  <p className="text-indigo-600 text-sm">{friends[currentFriend].phone}</p>
                </div>
              </div>
            </div>
            <button
              onClick={nextFriend}
              className="bg-indigo-500 text-white p-3 rounded-full hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-colors duration-300"
              aria-label="Next friend"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </motion.div>
      </div>
    </div>
  )
}