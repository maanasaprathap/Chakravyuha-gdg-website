import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { useContentSection } from '../data/chakravyuhaContent';
import { Mail, Phone, Instagram, Linkedin, Twitter, Youtube, User } from 'lucide-react';

const Contact = () => {
  const contact = useContentSection('contact');

  const socialIcons = {
    instagram: Instagram,
    linkedin: Linkedin,
    twitter: Twitter,
    youtube: Youtube
  };

  return (
    <AnimatedSection id="contact" className="py-20 md:py-32">
      <div className="container-custom">
        <h2 className="section-title" data-testid="contact-title">{contact.title}</h2>
        <p className="section-subtitle">{contact.subtitle}</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10"
          >
            <h3 className="font-semibold text-white mb-6">Contact Info</h3>
            
            <div className="space-y-4">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors"
                data-testid="contact-email"
              >
                <div className="p-2 rounded-lg bg-purple-500/20">
                  <Mail className="w-4 h-4 text-purple-400" />
                </div>
                <span className="text-sm">{contact.email}</span>
              </a>
              
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors"
                data-testid="contact-phone"
              >
                <div className="p-2 rounded-lg bg-purple-500/20">
                  <Phone className="w-4 h-4 text-purple-400" />
                </div>
                <span className="text-sm">{contact.phone}</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <h4 className="text-sm text-gray-400 mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {Object.entries(contact.socials).map(([platform, url]) => {
                  const Icon = socialIcons[platform] || Instagram;
                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover:bg-purple-500/20 transition-colors"
                      data-testid={`social-${platform}`}
                    >
                      <Icon className="w-5 h-5 text-gray-400 hover:text-purple-400" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Coordinators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 p-6 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10"
          >
            <h3 className="font-semibold text-white mb-6">Event Coordinators</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {contact.coordinators.map((coordinator, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors"
                  data-testid={`coordinator-${index}`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-full bg-purple-500/20">
                      <User className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{coordinator.name}</p>
                      <p className="text-xs text-gray-400">{coordinator.role}</p>
                    </div>
                  </div>
                  <a
                    href={`tel:${coordinator.phone}`}
                    className="text-sm text-purple-400 hover:text-purple-300"
                  >
                    {coordinator.phone}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
