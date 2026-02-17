import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import sectionData from '../data/sections.single-page.json';
import { Utensils, Bus, Bed, HeartPulse, Car, Wifi } from 'lucide-react';

const iconMap = {
  utensils: Utensils,
  bus: Bus,
  bed: Bed,
  'heart-pulse': HeartPulse,
  car: Car,
  wifi: Wifi
};

const Services = () => {
  const { services } = sectionData;

  return (
    <AnimatedSection id="services" className="py-20 md:py-32 bg-black/30">
      <div className="container-custom">
        <h2 className="section-title" data-testid="services-title">{services.title}</h2>
        <p className="section-subtitle">{services.subtitle}</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {services.items.map((item, index) => {
            const Icon = iconMap[item.icon] || Utensils;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, borderColor: 'rgba(124, 58, 237, 0.5)' }}
                className="p-5 md:p-6 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10 transition-all duration-300"
                data-testid={`service-${item.id}`}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                </div>
                <h3 className="font-semibold text-white text-sm md:text-base mb-2">{item.title}</h3>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Services;
