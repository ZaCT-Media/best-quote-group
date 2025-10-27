'use client';

import { useState, useEffect } from 'react';

const carouselImages = [
  '/home/housing-development-drone.jpg',
  '/home/housing-foundations.jpg',
  '/home/industrial-cnc-machine.jpg',
  '/home/types-of-cnc-machines.webp',
  '/home/warehouse-outside.jpg',
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const handleManualNavigation = (newIndex: number) => {
    setCurrentIndex(newIndex);
    setIsAutoPlaying(false);

    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  const goToSlide = (index: number) => {
    handleManualNavigation(index);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? carouselImages.length - 1 : currentIndex - 1;
    handleManualNavigation(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % carouselImages.length;
    handleManualNavigation(newIndex);
  };

  return (
    <section className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Carousel Images */}
      <div className="absolute inset-0">
        {carouselImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#2e3450]/80 via-[#464f7f]/70 to-[#464f7f]/60 z-10"></div>

            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${image}')`,
                backgroundColor: '#2e3450'
              }}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 z-30 text-white/80 hover:text-white transition-all duration-300 p-2 hover:bg-black/20 rounded-full cursor-pointer"
        aria-label="Previous slide"
      >
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 z-30 text-white/80 hover:text-white transition-all duration-300 p-2 hover:bg-black/20 rounded-full cursor-pointer"
        aria-label="Next slide"
      >
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 py-20 md:py-32">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-bold mb-8 leading-tight max-w-4xl mx-auto">
          Asset Finance - From
          <br />
          Printing Machinery to Plant -
          <br />
          we can help
        </h1>
        <a
          href="#contact"
          className="inline-block bg-[#464f7f] hover:bg-[#2e3450] text-white font-semibold px-10 py-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-base md:text-lg"
        >
          CONTACT US
        </a>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentIndex
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
