import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import image1 from "../../images/all images/IMG20230930145504.jpg";
import image2 from "../../images/all images/IMG20230930145504.jpg";
import image3 from "../../images/all images/IMG20230930145504.jpg";
import image4 from "../../images/all images/IMG20230930145504.jpg";
import image5 from "../../images/all images/IMG20230930145504.jpg";
import image6 from "../../images/all images/IMG20230930145504.jpg";
import image7 from "../../images/all images/IMG20230930145504.jpg";
import image8 from "../../images/all images/IMG20230930145504.jpg";
import image9 from "../../images/all images/IMG20230930145504.jpg";
import image10 from "../../images/all images/IMG20230930145504.jpg";
import image11 from "../../images/all images/IMG20230930145504.jpg";
import image12 from "../../images/all images/IMG20230930145504.jpg";
import image13 from "../../images/all images/IMG20230930145504.jpg";
import image14 from "../../images/all images/IMG20230930145504.jpg";

const allImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14];

const hexagonStyle = {
  width: "90px",
  height: "100px",
  clipPath: "polygon(0 28%, 50% 0, 100% 28%, 100% 72%, 50% 100%, 0 72%)",
  position: "relative",
};

const hexagonStyle2 = {
  width: "150px",
  height: "170px",
  clipPath: "polygon(0 28%, 50% 0, 100% 28%, 100% 72%, 50% 100%, 0 72%)",
  position: "relative",
};

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const HexagonImage = ({ src, style, index, imagesLoaded }) => {
  const [currentImage, setCurrentImage] = useState(src);
  const [imagePool, setImagePool] = useState([]);

  useEffect(() => {
    setImagePool(shuffleArray(allImages).slice(0, 7)); // Get 7 unique images
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      setImagePool((prevPool) => {
        const newPool = [...prevPool];
        newPool.push(newPool.shift());
        setCurrentImage(newPool[0]);
        return newPool;
      });
    }, 5000 + index * 1000); // Stagger the interval for each hexagon

    return () => clearInterval(interval);
  }, [index, imagesLoaded]);

  return (
    <motion.div
      className="hexagon"
      style={{
        ...style,
        overflow: "hidden",
        backgroundColor: "#8A2BE2", // Purple background
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
      }}
      whileHover={{ scale: 1.05, boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1)" }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.img
        src={currentImage}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        key={currentImage}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          boxShadow: "inset 0 0 0 4px #9370DB", // Light purple border
          clipPath: "polygon(0 28%, 50% 0, 100% 28%, 100% 72%, 50% 100%, 0 72%)",
          zIndex: 1,
        }}
      />
    </motion.div>
  );
};

const BannerImages = () => {
  const [style, setStyle] = useState(hexagonStyle);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setStyle(hexagonStyle);
      } else {
        setStyle(hexagonStyle2);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    // Preload images
    const imagePromises = allImages.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch((error) => console.error("Error loading images:", error));

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-10 bg-gradient-to-br from-purple-100 to-purple-300">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center gap-2 mb-2">
          <HexagonImage src={image1} style={style} index={0} imagesLoaded={imagesLoaded} />
          <HexagonImage src={image2} style={style} index={1} imagesLoaded={imagesLoaded} />
        </div>
        <div className="flex justify-center gap-2 -mt-5 sm:-mt-10">
          <HexagonImage src={image3} style={style} index={2} imagesLoaded={imagesLoaded} />
          <HexagonImage src={image4} style={style} index={3} imagesLoaded={imagesLoaded} />
          <HexagonImage src={image5} style={style} index={4} imagesLoaded={imagesLoaded} />
        </div>
        <div className="flex justify-center gap-2 -mt-5 sm:-mt-10">
          <HexagonImage src={image6} style={style} index={5} imagesLoaded={imagesLoaded} />
          <HexagonImage src={image7} style={style} index={6} imagesLoaded={imagesLoaded} />
          <HexagonImage src={image8} style={style} index={7} imagesLoaded={imagesLoaded} />
          <HexagonImage src={image9} style={style} index={8} imagesLoaded={imagesLoaded} />
        </div>
        <div className="flex justify-center gap-2 -mt-5 sm:-mt-10">
          <HexagonImage src={image10} style={style} index={9} imagesLoaded={imagesLoaded} />
          <HexagonImage src={image11} style={style} index={10} imagesLoaded={imagesLoaded} />
          <HexagonImage src={image12} style={style} index={11} imagesLoaded={imagesLoaded} />
        </div>
        <div className="flex justify-center gap-2 -mt-5 sm:-mt-10">
          <HexagonImage src={image13} style={style} index={12} imagesLoaded={imagesLoaded} />
          <HexagonImage src={image14} style={style} index={13} imagesLoaded={imagesLoaded} />
        </div>
      </div>
    </section>
  );
};

export default BannerImages;