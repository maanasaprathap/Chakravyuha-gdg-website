import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Code, Gamepad2, Wrench, Trophy, MapPin, Calendar, Clock, Users, ChevronDown, ExternalLink } from 'lucide-react';
import clubEvents from '../clubEvents.json';

const categoryConfig = {
  technicalEvents: {
    name: 'Technical Events',
    icon: Code,
    color: '#00f0ff'
  },
  funTechEvents: {
    name: 'FunTech Events',
    icon: Gamepad2,
    color: '#ff0099'
  },
  workshops: {
    name: 'Workshops',
    icon: Wrench,
    color: '#7c3aed'
  },
  hackathons: {
    name: 'Hackathons',
    icon: Trophy,
    color: '#fbbf24'
  }
};

const EventCard = ({ event, color }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="bg-black/40 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden"
      style={{ borderColor: expanded ? `${color}40` : 'rgba(255,255,255,0.1)' }}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-4 text-left flex items-center justify-between gap-4"
        data-testid={`event-${event.eventId}`}
      >
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-white truncate">{event.eventTitle}</h4>
          <div className="flex items-center gap-3 mt-1 text-sm text-gray-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {event.eventDate}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {event.venue}
            </span>
          </div>
        </div>
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-white/10"
          >
            <div className="p-4 space-y-4">
              <p className="text-sm text-gray-300 leading-relaxed">
                {event.eventDescription}
              </p>

              {event.mode && (
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300">
                    {event.mode}
                  </span>
                </div>
              )}

              {event.rounds && event.rounds.length > 0 && (
                <div>
                  <h5 className="text-sm font-semibold text-white mb-2">Rounds</h5>
                  <div className="space-y-2">
                    {event.rounds.map((round, idx) => (
                      <div key={idx} className="text-sm">
                        <span className="text-cyan-400">{round.roundName}:</span>
                        <span className="text-gray-400 ml-2">{round.roundDescription}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {event.prizes && (
                <div>
                  <h5 className="text-sm font-semibold text-white mb-2">Prizes</h5>
                  {Array.isArray(event.prizes) ? (
                    <ul className="text-sm text-gray-300 space-y-1">
                      {event.prizes.map((prize, idx) => (
                        <li key={idx}>{prize}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-300">{event.prizes}</p>
                  )}
                </div>
              )}

              {event.contacts && event.contacts.length > 0 && (
                <div>
                  <h5 className="text-sm font-semibold text-white mb-2">Coordinators</h5>
                  <div className="flex flex-wrap gap-2">
                    {event.contacts.map((contact, idx) => (
                      <span key={idx} className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300">
                        {contact.name} • {contact.phone}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white transition-all"
                style={{ background: color }}
                data-testid={`register-${event.eventId}`}
              >
                Register Now
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ClubModal = ({ club, isOpen, onClose }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  // Get club events from JSON
  const clubData = clubEvents.find(c => c.clubId === club?.clubId);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
      // Set first available category as active
      if (clubData) {
        const categories = ['technicalEvents', 'funTechEvents', 'workshops', 'hackathons'];
        const firstAvailable = categories.find(cat => clubData[cat]?.length > 0);
        setActiveCategory(firstAvailable || null);
      }
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen, clubData]);

  if (!club || !clubData) return null;

  const categories = ['technicalEvents', 'funTechEvents', 'workshops', 'hackathons']
    .filter(cat => clubData[cat]?.length > 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 pb-4 overflow-y-auto"
          style={{ background: 'rgba(0, 0, 0, 0.9)' }}
          onClick={onClose}
          data-testid="club-modal-overlay"
        >
          <motion.div
            initial={{ scale: 0.9, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 50, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl rounded-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, rgba(10, 10, 15, 0.98) 0%, rgba(5, 5, 10, 0.98) 100%)',
              border: '1px solid rgba(124, 58, 237, 0.3)',
              boxShadow: '0 0 60px rgba(124, 58, 237, 0.2)'
            }}
            onClick={e => e.stopPropagation()}
            data-testid="club-modal"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              data-testid="close-modal-btn"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Header */}
            <div className="relative p-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-4">
                <img
                  src={club.clubImage}
                  alt={club.clubName}
                  className="w-16 h-16 rounded-xl object-contain bg-white/10 p-2"
                />
                <div>
                  <h2 className="font-audiowide text-2xl text-white">{club.clubName}</h2>
                  <p className="text-purple-400 text-sm mt-1">{club.clubTagline}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                {club.clubDescription}
              </p>
            </div>

            {/* Category tabs */}
            {categories.length > 0 && (
              <div className="flex overflow-x-auto gap-2 p-4 border-b border-white/10">
                {categories.map(cat => {
                  const config = categoryConfig[cat];
                  const Icon = config.icon;
                  const isActive = activeCategory === cat;

                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`
                        flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all
                        ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}
                      `}
                      style={{
                        background: isActive ? `${config.color}30` : 'rgba(255,255,255,0.05)',
                        borderColor: isActive ? config.color : 'transparent',
                        border: '1px solid'
                      }}
                      data-testid={`category-${cat}`}
                    >
                      <Icon className="w-4 h-4" style={{ color: isActive ? config.color : 'inherit' }} />
                      {config.name}
                      <span className="ml-1 px-1.5 py-0.5 text-xs rounded-full bg-white/10">
                        {clubData[cat].length}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Events list */}
            <div className="p-4 max-h-[50vh] overflow-y-auto">
              {activeCategory && clubData[activeCategory] && (
                <div className="space-y-3">
                  {clubData[activeCategory].map(event => (
                    <EventCard
                      key={event.eventId}
                      event={event}
                      color={categoryConfig[activeCategory].color}
                    />
                  ))}
                </div>
              )}

              {categories.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-400">No events available for this club yet.</p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ClubModal;
