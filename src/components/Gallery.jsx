import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import sectionData from '../data/sections.single-page.json';
import { X, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const { gallery } = sectionData;
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <AnimatedSection id="gallery" className="py-20 md:py-32">
        <div className="container-custom">
          <h2 className="section-title" data-testid="gallery-title">{gallery.title}</h2>
          <p className="section-subtitle">{gallery.subtitle}</p>

          {/* Masonry Grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {gallery.images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer break-inside-avoid"
                onClick={() => setSelectedImage(image)}
                data-testid={`gallery-image-${image.id}`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95"
            onClick={() => setSelectedImage(null)}
            data-testid="gallery-lightbox"
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImage(null)}
              data-testid="close-lightbox-btn"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
