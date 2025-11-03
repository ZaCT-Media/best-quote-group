'use client';

import { useState, useEffect } from 'react';

const carouselSlides = [
  {
    image: '/home/housing-development-drone.jpg',
    title: 'Development Finance',
    subtitle: 'Fund your property development projects with flexible financing solutions',
    link: '/development-finance'
  },
  {
    image: '/home/housing-foundations.jpg',
    title: 'Buy to Let HMO & MUFB',
    subtitle: 'Specialist mortgages for HMO and multi-unit freehold block investments',
    link: '/buy-to-let'
  },
  {
    image: '/home/industrial-cnc-machine.jpg',
    title: 'Asset Finance',
    subtitle: 'From printing machinery to plant - acquire the equipment your business needs',
    link: '/asset-finance'
  },
  {
    image: '/home/types-of-cnc-machines.webp',
    title: 'Business Loans',
    subtitle: 'Flexible financing solutions to help your business grow and succeed',
    link: '/business-loans'
  },
  {
    image: '/home/warehouse-outside.jpg',
    title: 'Commercial Mortgages',
    subtitle: 'Finance for offices, retail, industrial units, and more',
    link: '/commercial-mortgages'
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselSlides.length);
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
    const newIndex = currentIndex === 0 ? carouselSlides.length - 1 : currentIndex - 1;
    handleManualNavigation(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % carouselSlides.length;
    handleManualNavigation(newIndex);
  };

  return (
    <section className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden py-4 sm:py-6 lg:py-8 bg-gray-700">
      {/* Content Container */}
      <div className="relative w-full max-w-7xl mx-auto min-h-[400px] md:min-h-[500px]">
        {/* Carousel Images */}
        <div className="absolute inset-0 mx-4 sm:mx-6 lg:mx-8 rounded-lg overflow-hidden z-0 pointer-events-none">
          {carouselSlides.map((slide, index) => (
            <div
              key={slide.image}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 via-gray-800/40 to-gray-700/30 z-10"></div>

              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('${slide.image}')`,
                  backgroundColor: '#374151'
                }}
              />
            </div>
          ))}
        </div>
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-6 sm:left-10 lg:left-12 top-1/2 -translate-y-1/2 z-20 text-white/80 hover:text-white transition-all duration-300 p-2 hover:bg-black/20 rounded-full cursor-pointer pointer-events-auto"
          aria-label="Previous slide"
        >
          <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-6 sm:right-10 lg:right-12 top-1/2 -translate-y-1/2 z-20 text-white/80 hover:text-white transition-all duration-300 p-2 hover:bg-black/20 rounded-full cursor-pointer pointer-events-auto"
          aria-label="Next slide"
        >
          <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Content */}
        <div className="relative z-20 text-center text-white py-20 md:py-32 px-4 sm:px-6 lg:px-8 pointer-events-none">
          <div className="transition-opacity duration-500">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-bold mb-4 leading-tight max-w-4xl mx-auto">
              {carouselSlides[currentIndex].title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              {carouselSlides[currentIndex].subtitle}
            </p>
          </div>
          <a
            href={carouselSlides[currentIndex].link}
            className="inline-block bg-[#464f7f] hover:bg-[#2e3450] text-white font-semibold px-10 py-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-base md:text-lg cursor-pointer pointer-events-auto"
          >
            LEARN MORE
          </a>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer pointer-events-auto ${
                index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
