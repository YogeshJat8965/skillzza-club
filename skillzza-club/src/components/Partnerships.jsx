import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Handshake } from 'lucide-react';
import { partnerships, images } from '../data/content';

const Partnerships = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <section className="relative py-32 lg:py-40 overflow-hidden" ref={ref}>
      {/* Background Image with Parallax */}
      <div className="absolute inset-0">
        <img
          src={images.partnership}
          alt="Partnership"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-primary-dark/80 to-dark/90" />
      </div>

      {/* Decorative frame */}
      <div className="absolute inset-8 sm:inset-12 lg:inset-20 border border-white/10 rounded-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full glass text-sm font-bold uppercase tracking-widest text-white/90">
            <Handshake size={20} />
            {partnerships.label}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white mb-10 leading-tight"
        >
          {partnerships.heading}
        </motion.h2>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: '0 0 50px rgba(255,255,255,0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-dark font-bold text-lg shadow-2xl hover:shadow-white/20 transition-all duration-300"
          >
            {partnerships.cta}
            <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-300" />
          </motion.button>
        </motion.div>

        {/* Animated decorative elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/3 rounded-full pointer-events-none"
        />
      </div>
    </section>
  );
};

export default Partnerships;
