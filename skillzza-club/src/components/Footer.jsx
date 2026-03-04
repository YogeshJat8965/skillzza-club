import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { footer } from '../data/content';

const Footer = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <footer className="relative bg-[#D8D4FD] py-16 overflow-hidden" ref={ref}>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-[#1E1145]">
            {footer.tagline}
          </h3>
        </motion.div>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* India Office */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-[#FF6B35] mb-3">
              {footer.office.label}
            </h4>
            <p className="text-[#1E1145] text-sm leading-relaxed">
              {footer.office.address}
            </p>
          </motion.div>

          {/* Our Presence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-[#FF6B35] mb-3">
              {footer.presence.label}
            </h4>
            <p className="text-[#1E1145] text-sm">
              {footer.presence.cities.join(' | ')}
            </p>
          </motion.div>

          {/* Contact Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold text-[#FF6B35] mb-3">
              {footer.contact.label}
            </h4>
            <a
              href={`tel:${footer.contact.phone.replace(/\s/g, '')}`}
              className="text-[#1E1145] text-sm hover:text-primary transition-colors"
            >
              {footer.contact.phone}
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
