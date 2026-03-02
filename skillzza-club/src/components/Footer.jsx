import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, MapPin, Building2, Globe2 } from 'lucide-react';
import { footer } from '../data/content';

const Footer = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <footer className="relative bg-dark-deep pt-20 pb-8 overflow-hidden" ref={ref}>
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Column 1: Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                <span className="text-white font-black text-lg">S</span>
              </div>
              <span className="text-2xl font-extrabold text-white">
                Skill<span className="text-primary-light">zza</span>
              </span>
            </div>
            <p className="text-white/60 text-base leading-relaxed max-w-sm">
              {footer.tagline}
            </p>
            {/* Social icons placeholder */}
            <div className="flex gap-3 mt-6">
              {['LinkedIn', 'Twitter', 'Instagram', 'YouTube'].map((social, i) => (
                <motion.div
                  key={social}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/30 transition-all cursor-pointer text-xs font-bold"
                >
                  {social[0]}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Office & Presence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {/* India Office */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Building2 size={18} className="text-primary-light" />
                <h4 className="text-white font-bold text-sm uppercase tracking-wider">
                  {footer.office.label}
                </h4>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                {footer.office.address}
              </p>
            </div>

            {/* Our Presence */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Globe2 size={18} className="text-primary-light" />
                <h4 className="text-white font-bold text-sm uppercase tracking-wider">
                  {footer.presence.label}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {footer.presence.cities.map((city, i) => (
                  <motion.span
                    key={city}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-medium hover:bg-primary/10 hover:text-primary-light hover:border-primary/20 transition-all cursor-default"
                  >
                    {city}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Column 3: Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Phone size={18} className="text-primary-light" />
              <h4 className="text-white font-bold text-sm uppercase tracking-wider">
                {footer.contact.label}
              </h4>
            </div>
            <a
              href={`tel:${footer.contact.phone.replace(/\s/g, '')}`}
              className="text-white/70 text-lg font-medium hover:text-primary-light transition-colors"
            >
              {footer.contact.phone}
            </a>

            {/* Quick links */}
            <div className="mt-8">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-3">
                Quick Links
              </h4>
              <div className="space-y-2">
                {['Studios', 'Implementation', 'Impact Framework', 'Partner With Us'].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block text-white/50 text-sm hover:text-primary-light transition-colors hover:translate-x-1 duration-200"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-8" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            © 2026 Skillzza. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a key={item} href="#" className="text-white/30 text-sm hover:text-white/60 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
