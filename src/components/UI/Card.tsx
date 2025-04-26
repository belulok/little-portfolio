import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  whileHover?: object;
  delay?: number;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  whileHover = { y: -5 },
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={whileHover}
      className={`bg-neutral-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-neutral-700/50 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;