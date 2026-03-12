import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { studioModel } from '../data/content';
import academicRoadmap from '../assets/The Skill Learning Pathway.jpg';

const StudioModel = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section className="relative py-12 lg:py-16 bg-gradient-to-br from-primary-50 via-white to-secondary-light overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Academic Year Roadmap Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative order-2 lg:order-1"
          >
            <motion.img
              src={academicRoadmap}
              alt="Academic Year Roadmap"
              initial={{ scale: 0.9 }}
              animate={inView ? { scale: 1 } : { scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full rounded-3xl shadow-2xl shadow-primary/10"
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark mb-3">
              {studioModel.heading}
            </h2>
            <p className="text-xl font-semibold text-primary mb-8">{studioModel.subheading}</p>

            {/* Checklist */}
            <div className="space-y-4 mb-10">
              {studioModel.checklist.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={22} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-base leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow btn-glow"
              >
                {studioModel.cta1}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-primary/30 text-primary font-semibold hover:bg-primary/5 transition-colors"
              >
                {studioModel.cta2}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section >
  );
};

export default StudioModel;
