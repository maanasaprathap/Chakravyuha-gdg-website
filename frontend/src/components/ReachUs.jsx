import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { useContentSection } from '../data/chakravyuhaContent';
import { MapPin, Bus, Clock, AlertCircle } from 'lucide-react';

const ReachUs = () => {
  const reachUs = useContentSection('reachUs');

  return (
    <AnimatedSection id="reach-us" className="py-20 md:py-32 bg-black/30">
      <div className="container-custom">
        <h2 className="section-title" data-testid="reach-us-title">{reachUs.title}</h2>
        <p className="section-subtitle">Find your way to the battlefield</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Address & Bus Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-purple-500/20">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="font-semibold text-white">Venue</h3>
              </div>
              <div className="text-gray-300 leading-relaxed">
                <p>{reachUs.address.line1}</p>
                <p>{reachUs.address.line2}</p>
                <p>{reachUs.address.line3}</p>
                <p>{reachUs.address.line4}</p>
              </div>
              <a
                href={reachUs.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 text-sm text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors"
                data-testid="view-map-btn"
              >
                View on Google Maps
              </a>
            </div>

            {/* Bus Service Card */}
            <div className="p-6 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-cyan-500/20">
                  <Bus className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="font-semibold text-white">{reachUs.busInfo.title}</h3>
              </div>
              <p className="text-gray-300 mb-3">{reachUs.busInfo.description}</p>
              <div className="flex items-center gap-2 text-sm text-cyan-400">
                <Clock className="w-4 h-4" />
                <span>Timings: {reachUs.busInfo.timings}</span>
              </div>
            </div>
          </motion.div>

          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-amber-500/20">
                <AlertCircle className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="font-semibold text-white">Important Instructions</h3>
            </div>
            <ul className="space-y-4">
              {reachUs.instructions.map((instruction, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 text-sm flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span>{instruction}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ReachUs;
