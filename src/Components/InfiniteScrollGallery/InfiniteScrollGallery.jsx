import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
let img1 = "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1730651635/memory%20vault/x8ghinunbmhgjibcz99b.jpg"
let img2 = "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1730651635/memory%20vault/dynznfpdfuxpxpjrcrsm.jpg"
let img3 = "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1730651635/memory%20vault/zfl9dcu3mvqelxzumfwg.jpg"
let img4 = "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1730651632/memory%20vault/dmfjlzq3uwuibglfl1vk.jpg"
let img5 = "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1730651627/memory%20vault/j5x8qmswawys4sccgkvm.jpg"
let img6 = "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1730651626/memory%20vault/zabzlzktlggob9km4b0t.jpg"
let img7 = "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1730651626/memory%20vault/nejpknpdbdjiq4kexg5v.jpg"
let img8 = "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1730651599/memory%20vault/mxjrkogesxecbei0f5ye.jpg"
let img9 = "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1730651616/memory%20vault/sy20wn1xhsfrdqtduj9x.jpg"
let img10 = "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1730651615/memory%20vault/r2ejfnhbabbwlqmgiq3c.jpg"

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
