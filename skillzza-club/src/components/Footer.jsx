import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Globe, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';
import { footer } from '../data/content';
import logo from '../assets/SKillzza-Logo-123-01.png';

const Footer = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <footer className="relative bg-white pt-12 lg:pt-16 overflow-hidden border-t border-gray-100" ref={ref}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">

        {/* Two-Column Layout: Left (Logo + Info) | Right (Quick Links + Cognify) */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* ═══ LEFT: Logo, Tagline, Office, Presence, Contact ═══ */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:w-[40%] flex flex-col items-center lg:items-start"
          >
            <img src={logo} alt="Skillzza Logo" className="h-10 sm:h-12 w-auto mb-5" />
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed text-center lg:text-left max-w-sm mb-8">
              {footer.tagline}
            </p>

            {/* India Office */}
            <div className="mb-6 w-full">
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={18} className="text-[#7C3AED]" />
                <h4 className="text-base font-bold text-gray-800">
                  {footer.office.label}
                </h4>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                {footer.office.address}
              </p>
            </div>

            {/* Our Presence */}
            <div className="mb-6 w-full">
              <div className="flex items-center gap-2 mb-2">
                <Globe size={18} className="text-[#7C3AED]" />
                <h4 className="text-base font-bold text-gray-800">
                  {footer.presence.label}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {footer.presence.cities.map((city, i) => (
                  <span key={i} className="text-gray-500 text-sm">
                    {city}{i < footer.presence.cities.length - 1 && <span className="text-gray-300 ml-2">•</span>}
                  </span>
                ))}
              </div>
            </div>


          </motion.div>

          {/* ═══ RIGHT: Quick Links + Cognify k12 ═══ */}
          <div className="lg:w-[60%] grid grid-cols-2 gap-8 lg:gap-16">
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-lg font-bold text-gray-900 mb-5">
                {footer.quickLinks.label}
              </h4>
              <ul className="space-y-3">
                {footer.quickLinks.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-600 text-base font-medium hover:text-[#7C3AED] transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Cognify k12 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-lg font-bold text-gray-900 mb-5">
                {footer.cognifyK12.label}
              </h4>
              <ul className="space-y-3">
                {footer.cognifyK12.links.map((link, i) => (
                  <li key={i}>
                    <span className="text-gray-600 text-base font-medium hover:text-[#7C3AED] transition-colors duration-300 cursor-pointer">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>


      </div>

      {/* Bottom strip */}
      <div className="bg-[#AB87F0] py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Copyright */}
          <p className="text-white text-xs sm:text-sm font-medium">
            © {new Date().getFullYear()} Skillzza. All rights reserved.
          </p>
          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} className="text-white hover:text-gray-200 transition-colors duration-300" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter size={20} className="text-white hover:text-gray-200 transition-colors duration-300" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={20} className="text-white hover:text-gray-200 transition-colors duration-300" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Youtube size={20} className="text-white hover:text-gray-200 transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
