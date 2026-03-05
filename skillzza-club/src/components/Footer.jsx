import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Globe } from 'lucide-react';
import { footer } from '../data/content';
import logo from '../assets/SKillzza-Logo-123-01.png';

const Footer = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <footer className="relative bg-white py-16 lg:py-20 overflow-hidden border-t border-gray-100" ref={ref}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Layout: Logo Left | Content Right */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* ═══ LEFT: Logo & Tagline ═══ */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:w-[35%] flex flex-col items-center lg:items-start"
          >
            <img src={logo} alt="Skillzza Logo" className="h-20 sm:h-24 w-auto mb-5" />
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed text-center lg:text-left max-w-sm">
              {footer.tagline}
            </p>
          </motion.div>

          {/* ═══ RIGHT: Content Columns ═══ */}
          <div className="lg:w-[65%] grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-10">
            {/* India Office */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={18} className="text-[#7C3AED]" />
                <h4 className="text-base font-bold text-gray-800">
                  {footer.office.label}
                </h4>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                {footer.office.address}
              </p>
            </motion.div>

            {/* Our Presence */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-3">
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
            </motion.div>

            {/* Contact Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Phone size={18} className="text-[#7C3AED]" />
                <h4 className="text-base font-bold text-gray-800">
                  {footer.contact.label}
                </h4>
              </div>
              <a
                href={`tel:${footer.contact.phone.replace(/\s/g, '')}`}
                className="text-gray-500 text-sm hover:text-[#7C3AED] transition-colors duration-300"
              >
                {footer.contact.phone}
              </a>
            </motion.div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 pt-6 border-t border-gray-100 text-center"
        >
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Skillzza. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
