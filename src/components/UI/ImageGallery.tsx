import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ 
  images, 
  isOpen, 
  onClose,
  initialIndex = 0
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        navigatePrev();
      } else if (e.key === 'ArrowRight') {
        navigateNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length]);

  // Reset to initial index when gallery opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  const navigateNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const navigatePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
        onClick={onClose}
      >
        {/* Close button */}
        <button 
          className="absolute top-4 right-4 text-white p-2 rounded-full bg-neutral-800/50 hover:bg-neutral-700/50 z-10"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        {/* Navigation buttons */}
        <button 
          className="absolute left-4 text-white p-2 rounded-full bg-neutral-800/50 hover:bg-neutral-700/50 z-10"
          onClick={(e) => {
            e.stopPropagation();
            navigatePrev();
          }}
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          className="absolute right-4 text-white p-2 rounded-full bg-neutral-800/50 hover:bg-neutral-700/50 z-10"
          onClick={(e) => {
            e.stopPropagation();
            navigateNext();
          }}
        >
          <ChevronRight size={24} />
        </button>

        {/* Image container */}
        <div 
          className="relative w-full h-full max-w-4xl max-h-[80vh] flex items-center justify-center p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>
        </div>

        {/* Image counter */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-neutral-800/50 px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageGallery;
