import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { partnerships, images } from '../data/content';

const Partnerships = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <section className="py-8 lg:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#EDE9FE] via-[#F3F0FF] to-[#EDE9FE]">
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative max-w-7xl mx-auto rounded-2xl overflow-hidden bg-gradient-to-r from-primary-dark via-primary-dark/95 to-dark"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 px-6 py-6 md:px-10 md:py-8 lg:pr-0 lg:py-0">
          {/* Left: Text Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-5"
            >
              {partnerships.heading}
            </motion.h2>

            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(255,255,255,0.2)' }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 px-6 py-3 lg:px-8 lg:py-3.5 rounded-full bg-white text-dark font-semibold text-sm lg:text-base shadow-lg hover:shadow-white/30 transition-all duration-300"
            >
              {partnerships.cta}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full md:w-auto md:flex-shrink-0"
          >
            <div className="w-64 h-64 mx-auto md:mx-0 lg:w-72 lg:h-72 rounded-r-xl overflow-hidden shadow-2xl">
              <img
                src={images.partnership}
                alt="Partnership"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Partnerships;
