import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import GlassCard from './GlassCard';
import ClubModal from './ClubModal';
import clubs from '../clubs.json';

const ClubsSection = () => {
  const [selectedClub, setSelectedClub] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleClubClick = (club) => {
    setSelectedClub(club);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedClub(null), 300);
  };

  return (
    <>
      <AnimatedSection id="clubs" className="py-20 md:py-32">
        <div className="container-custom">
          <h2 className="section-title" data-testid="clubs-title">OUR CLUBS</h2>
          <p className="section-subtitle">Explore our diverse community of tech enthusiasts</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {clubs.map((club, index) => (
              <motion.div
                key={club.clubId}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <GlassCard
                  onClick={() => handleClubClick(club)}
                  className="p-4 md:p-6 h-full"
                  glow
                  testId={`club-card-${club.clubId}`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-16 h-16 md:w-20 md:h-20 mb-4">
                      <img
                        src={club.clubImage}
                        alt={club.clubName}
                        className="w-full h-full object-contain rounded-xl bg-white/5 p-2"
                      />
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-xl bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="font-semibold text-white text-sm md:text-base mb-1 line-clamp-1">
                      {club.clubName}
                    </h3>
                    <p className="text-xs text-gray-400 line-clamp-2 hidden sm:block">
                      {club.clubTagline}
                    </p>
                    <span className="mt-3 px-3 py-1 text-xs text-purple-300 bg-purple-500/20 rounded-full">
                      View Events
                    </span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Club Modal */}
      <ClubModal
        club={selectedClub}
        isOpen={modalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default ClubsSection;
