import React from 'react';
import { motion } from 'framer-motion';
import sectionData from '../data/sections.single-page.json';
import { Instagram, Linkedin, Twitter, Youtube, Heart } from 'lucide-react';

const Footer = () => {
  const { footer, contact } = sectionData;

  const socialIcons = {
    instagram: Instagram,
    linkedin: Linkedin,
    twitter: Twitter,
    youtube: Youtube
  };

  return (
    <footer className="relative py-12 border-t border-white/10">
      {/* Gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

      <div className="container-custom">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="/chakravyuha-logo.png"
            alt="Chakravyuha 26"
            className="h-12 mb-4"
          />

          {/* Tagline */}
          <p className="text-gray-400 text-sm mb-6">{footer.tagline}</p>

          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            {Object.entries(contact.socials).map(([platform, url]) => {
              const Icon = socialIcons[platform] || Instagram;
              return (
                <motion.a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-purple-500/20 transition-colors"
                  whileHover={{ y: -3 }}
                  data-testid={`footer-social-${platform}`}
                >
                  <Icon className="w-5 h-5 text-gray-400 hover:text-purple-400" />
                </motion.a>
              );
            })}
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            {footer.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500">
            <p>{footer.copyright}</p>
            <p className="mt-2 flex items-center justify-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> by MIT Students
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
