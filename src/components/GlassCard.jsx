import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ 
  children, 
  className = '', 
  hover = true,
  glow = false,
  onClick,
  testId
}) => {
  return (
    <motion.div
      data-testid={testId}
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-2xl
        bg-black/40 backdrop-blur-xl
        border border-white/10
        ${hover ? 'cursor-pointer' : ''}
        ${className}
      `}
      whileHover={hover ? { 
        y: -8,
        borderColor: 'rgba(124, 58, 237, 0.5)',
        boxShadow: glow ? '0 20px 40px rgba(124, 58, 237, 0.2)' : '0 20px 40px rgba(0, 0, 0, 0.3)'
      } : {}}
      transition={{ duration: 0.3 }}
    >
      {/* Gradient overlay on hover */}
      {hover && (
        <motion.div
          className="absolute inset-0 opacity-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, rgba(124, 58, 237, 0.1) 0%, transparent 70%)'
          }}
          whileHover={{ opacity: 1 }}
        />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;
