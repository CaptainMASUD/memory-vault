import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Banner({ interval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { url: 'https://res.cloudinary.com/dwj5oqpqz/image/upload/v1730651592/memory%20vault/ivdcbl12k2gg5sy6xtpo.jpg', title: 'Slide 1' },
    { url: 'https://res.cloudinary.com/dwj5oqpqz/image/upload/v1730651592/memory%20vault/ivdcbl12k2gg5sy6xtpo.jpg', title: 'Slide 2' },
    { url: 'https://res.cloudinary.com/dwj5oqpqz/image/upload/v1730651576/memory%20vault/nziev0ed048g6xkdo5bz.jpg', title: 'Slide 3' },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div className="relative w-full h-[70vh]">
      <div className="overflow-hidden relative rounded-lg h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.url}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
              <h2 className="text-xl font-bold">{slide.title}</h2>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
