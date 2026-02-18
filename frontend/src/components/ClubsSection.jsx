import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import GlassCard from './GlassCard';
import ClubModal from './ClubModal';
import { fetchCommunityEvents } from '../data/communityEventsClient';

const CLUBS_API_URL = 'https://pdamit.in/api/persohub/clubs';

const ClubsSection = () => {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedClub, setSelectedClub] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [eventsLoading, setEventsLoading] = useState(true);
  const [eventsError, setEventsError] = useState('');

  const fetchClubs = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(CLUBS_API_URL, { method: 'GET' });
      if (!response.ok) {
        throw new Error(`Failed to fetch clubs: ${response.status}`);
      }
      const data = await response.json();
      if (!Array.isArray(data)) {
        throw new Error('Unexpected clubs API response');
      }
      setClubs(data);
    } catch (err) {
      setError(err?.message || 'Unable to load clubs');
      setClubs([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchEvents = useCallback(async () => {
    setEventsLoading(true);
    setEventsError('');
    try {
      const data = await fetchCommunityEvents();
      setEvents(data);
    } catch (err) {
      setEventsError(err?.message || 'Unable to load events');
      setEvents([]);
    } finally {
      setEventsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchClubs();
    fetchEvents();
  }, [fetchClubs, fetchEvents]);

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

          {loading && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {Array.from({ length: 8 }).map((_, idx) => (
                <div
                  key={`club-skeleton-${idx}`}
                  className="h-48 md:h-56 rounded-2xl bg-white/5 border border-white/10 animate-pulse"
                />
              ))}
            </div>
          )}

          {!loading && error && (
            <div className="rounded-2xl border border-red-400/40 bg-red-500/10 p-5 text-center">
              <p className="text-red-200 text-sm mb-3">{error}</p>
              <button
                type="button"
                onClick={fetchClubs}
                className="px-4 py-2 rounded-full bg-red-500/30 text-white hover:bg-red-500/50 transition-colors"
              >
                Retry
              </button>
            </div>
          )}

          {!loading && !error && (
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
          )}
        </div>
      </AnimatedSection>

      {/* Club Modal */}
      <ClubModal
        club={selectedClub}
        isOpen={modalOpen}
        onClose={closeModal}
        events={events}
        eventsLoading={eventsLoading}
        eventsError={eventsError}
        onRetryEvents={fetchEvents}
      />
    </>
  );
};

export default ClubsSection;
