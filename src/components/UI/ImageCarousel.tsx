import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageCarouselProps {
  images: string[];
  interval?: number;
  className?: string;
  onClick?: () => void;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ 
  images, 
  interval = 5000, 
  className = "",
  onClick
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  // Auto-advance images
  useEffect(() => {
    if (images.length <= 1) return;
    
    const timer = setInterval(() => {
      nextImage();
    }, interval);
    
    return () => clearInterval(timer);
  }, [images.length, interval, nextImage]);

  if (images.length === 0) return null;

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      
      {/* Image indicator dots */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
