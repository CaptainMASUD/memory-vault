import React, { useState, useEffect } from "react";

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
let img11 = "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1730651598/memory%20vault/dencxp2g84jhac62bpnh.jpg"
let img12 = "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1730651598/memory%20vault/lbkvyxjrbkz2zmd2cmn2.jpg"
let img13 = "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1730651597/memory%20vault/lx3kwrk0nzcagsjcf665.jpg"
let img14 = "https://res.cloudinary.com/dwj5oqpqz/image/upload/v1730651593/memory%20vault/xlsd0uhckxic6stmrel7.jpg"


const allImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14];

const hexagonStyle = {
  width: "90px",
  height: "100px",
  clipPath: "polygon(0 28%, 50% 0, 100% 28%, 100% 72%, 50% 100%, 0 72%)",
  position: "relative",
  transition: "all 1s ease", // Smooth transition for hexagon style changes
};

const hexagonStyle2 = {
  width: "150px",
  height: "170px",
  clipPath: "polygon(0 28%, 50% 0, 100% 28%, 100% 72%, 50% 100%, 0 72%)",
  position: "relative",
  transition: "all 1s ease", // Smooth transition for hexagon style changes
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
  const [fade, setFade] = useState(true); // Track fade-in/out state

  useEffect(() => {
    setImagePool(shuffleArray(allImages).slice(0, 7)); // Get 7 unique images
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setImagePool((prevPool) => {
          const newPool = [...prevPool];
          newPool.push(newPool.shift());
          setCurrentImage(newPool[0]);
          return newPool;
        });
        setFade(true); // Start fade in
      }, 500); // Wait until fade-out completes (0.5s)

    }, 5000 + index * 1000); // Stagger the interval for each hexagon

    return () => clearInterval(interval);
  }, [index, imagesLoaded]);

  return (
    <div
      className="hexagon"
      style={{
        ...style,
        overflow: "hidden",
        backgroundColor: "#8A2BE2", // Purple background
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
      }}
    >
      <img
        src={currentImage}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: fade ? 1 : 0, // Apply fade-in/out effect based on fade state
          transition: "opacity 0.5s ease-in-out", // Fade transition
        }}
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
    </div>
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
    <section className="py-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center gap-2 mb-2">
          <HexagonImage src={img1 } style={style} index={0} imagesLoaded={imagesLoaded} />
          <HexagonImage src={img2} style={style} index={1} imagesLoaded={imagesLoaded} />
        </div>
        <div className="flex justify-center gap-2 -mt-5 sm:-mt-10">
          <HexagonImage src={img3} style={style} index={2} imagesLoaded={imagesLoaded} />
          <HexagonImage src={img4} style={style} index={3} imagesLoaded={imagesLoaded} />
          <HexagonImage src={img5} style={style} index={4} imagesLoaded={imagesLoaded} />
        </div>
        <div className="flex justify-center gap-2 -mt-5 sm:-mt-10">
          <HexagonImage src={img6} style={style} index={5} imagesLoaded={imagesLoaded} />
          <HexagonImage src={img7} style={style} index={6} imagesLoaded={imagesLoaded} />
          <HexagonImage src={img8} style={style} index={7} imagesLoaded={imagesLoaded} />
          <HexagonImage src={img9} style={style} index={8} imagesLoaded={imagesLoaded} />
        </div>
        <div className="flex justify-center gap-2 -mt-5 sm:-mt-10">
          <HexagonImage src={img10} style={style} index={9} imagesLoaded={imagesLoaded} />
          <HexagonImage src={img11} style={style} index={10} imagesLoaded={imagesLoaded} />
          <HexagonImage src={img12} style={style} index={11} imagesLoaded={imagesLoaded} />
        </div>
        <div className="flex justify-center gap-2 -mt-5 sm:-mt-10">
          <HexagonImage src={img13} style={style} index={12} imagesLoaded={imagesLoaded} />
          <HexagonImage src={img14} style={style} index={13} imagesLoaded={imagesLoaded} />
        </div>
      </div>
    </section>
  );
};

export default BannerImages;
