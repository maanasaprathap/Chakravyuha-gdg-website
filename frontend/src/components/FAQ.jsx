import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useContentSection } from '../data/chakravyuhaContent';

const FAQItem = ({ item, isOpen, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="border border-white/10 rounded-xl overflow-hidden hover:border-purple-500/30 transition-colors"
    >
      <button
        onClick={onClick}
        className="w-full p-5 text-left flex items-center justify-between gap-4 bg-black/30 hover:bg-black/40 transition-colors"
        data-testid={`faq-question-${item.id}`}
      >
        <span className="font-medium text-white pr-4">{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-purple-400" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="p-5 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
              <p className="pt-4">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [openId, setOpenId] = useState(null);
  const faq = useContentSection('faq');

  const handleClick = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <AnimatedSection id="faq" className="py-20 md:py-32">
      <div className="container-custom">
        <h2 className="section-title" data-testid="faq-title">{faq.title}</h2>
        <p className="section-subtitle">Everything you need to know</p>

        <div className="max-w-3xl mx-auto space-y-3">
          {faq.items.map((item, index) => (
            <FAQItem
              key={item.id}
              item={item}
              index={index}
              isOpen={openId === item.id}
              onClick={() => handleClick(item.id)}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default FAQ;
