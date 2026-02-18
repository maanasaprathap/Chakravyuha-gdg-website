import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { useContentSection } from '../data/chakravyuhaContent';
import { Sparkles, Building2, CheckCircle } from 'lucide-react';

const About = () => {
  const aboutChakravyuha = useContentSection('aboutChakravyuha');
  const aboutMIT = useContentSection('aboutMIT');

  return (
    <AnimatedSection id="about" className="py-20 md:py-32">
      <div className="container-custom">
        {/* About Chakravyuha */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-purple-500/20 border border-purple-500/30">
              <Sparkles className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="font-audiowide text-2xl md:text-3xl text-white" data-testid="about-chakravyuha-title">
              {aboutChakravyuha.title}
            </h2>
          </div>

          <div className="max-w-4xl glass rounded-2xl p-6 md:p-8">
            <p className="text-gray-300 leading-relaxed mb-4">
              {aboutChakravyuha.description}
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              {aboutChakravyuha.description2}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {aboutChakravyuha.description3}
            </p>
          </div>
        </motion.div>

        {/* About MIT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="ml-auto"
        >
          <div className="flex items-center gap-3 mb-6 justify-end">
            <h2 className="font-audiowide text-2xl md:text-3xl text-white" data-testid="about-mit-title">
              {aboutMIT.title}
            </h2>
            <div className="p-3 rounded-xl bg-cyan-500/20 border border-cyan-500/30">
              <Building2 className="w-6 h-6 text-cyan-400" />
            </div>
          </div>

          <div className="max-w-4xl glass rounded-2xl p-6 md:p-8 ml-auto">
            <p className="text-gray-300 leading-relaxed mb-4">
              {aboutMIT.description}
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              {aboutMIT.description2}
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {aboutMIT.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-2 text-sm text-gray-400"
                >
                  <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>{highlight}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default About;
