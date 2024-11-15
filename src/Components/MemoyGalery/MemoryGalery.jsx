import { motion } from 'framer-motion'
import img1 from "../../images/all images/IMG20230930145504.jpg"
import img2 from "../../images/all images/IMG_20241009_175939_463.jpg"
import img3 from "../../images/all images/IMG20240324184314.jpg"
import img4 from "../../images/all images/IMG20241008004506.jpg"
import img5 from "../../images/all images/IMG20241008182723.jpg"
import img6 from "../../images/all images/IMG20240129111346.jpg"
import img7 from "../../images/all images/IMG_20230828_163217_315.jpg"
import img8 from "../../images/all images/IMG20240324184237.jpg"
import img9 from "../../images/all images/IMG_20241009_180030_400.jpg"
import img10 from "../../images/all images/IMG_20241009_180025_553.jpg"

const images = [
  { id: 1, src: img1, alt: 'Memory 1' },
  { id: 2, src: img2, alt: 'Memory 2' },
  { id: 3, src: img3, alt: 'Memory 3' },
  { id: 4, src: img4, alt: 'Memory 4' },
  { id: 5, src: img5, alt: 'Memory 5' },
  { id: 6, src: img6, alt: 'Memory 6' },
  { id: 7, src: img7, alt: 'Memory 7' },
  { id: 8, src: img8, alt: 'Memory 8' },
  { id: 9, src: img9, alt: 'Memory 9' },
  { id: 10, src: img10, alt: 'Memory 10' },
]

export default function MemoryGallery() {
  return (
    <div className="p-8">
      {/* Animated Gradient Text Header */}
      <h1 className="text-4xl font-extrabold text-center mb-12 animate-gradient-text">
        The Timeless Memories
      </h1>
      
      {/* Image Gallery Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {images.map((image) => (
          <motion.div
            key={image.id}
            className="relative group overflow-hidden rounded-lg shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1 * image.id,
              type: 'spring',
              stiffness: 100,
              damping: 15,
            }}
          >
            {/* Hover Effect */}
            <motion.img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover group-hover:blur-sm group-hover:scale-110 transition-all duration-500"
              whileHover={{ scale: 1.1 }}
            />
            {/* Dynamic Image Caption with Overlay */}
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
            >
              <h3 className="text-white text-3xl font-bold transform scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 ease-in-out">
                Memory {image.id}
              </h3>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Hover Over Header Animation */}
      <style jsx>{`
        @keyframes gradient-text {
          0% {
            background-position: 0%;
          }
          50% {
            background-position: 100%;
          }
          100% {
            background-position: 0%;
          }
        }
        .animate-gradient-text {
          background: linear-gradient(45deg, #ff6e7f, #bfe9ff, #ff9a8b, #ff6e7f);
          background-size: 400% 400%;
          color: transparent;
          -webkit-background-clip: text;
          animation: gradient-text 6s ease infinite;
        }
      `}</style>
    </div>
  )
}
