import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
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
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  

];

export default function SmoothInfiniteScrollGallery() {
  const controls = useAnimation();

  useEffect(() => {
    const startScroll = async () => {
      while (true) {
        await controls.start({ x: '-100%' });
        await controls.set({ x: '0%' });  // Instantly reset without animation
      }
    };
    startScroll();
  }, [controls]);

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex space-x-8"
        animate={controls}
        transition={{
          x: {
            duration: 25,
            ease: 'linear',  // Linear ease for a consistent scroll
            repeat: Infinity,
          },
        }}
      >
        {/* Render two sets of images for a seamless scrolling effect */}
        {[...images, ...images].map((src, index) => (
          <div key={index} className="flex-shrink-0 w-64">
            <img
              src={src}
              alt={`Scroll image ${index + 1}`}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
