import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, ArrowRight, BookOpen, Layers, Award } from 'lucide-react';
import { studioModel } from '../data/content';

const StudioModel = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  const timelineStudios = [
    { name: 'STEM Studio', icon: '🤖', color: '#3B82F6', term: 'Term 1' },
    { name: 'Humanities Studio', icon: '🌍', color: '#F59E0B', term: 'Term 2' },
    { name: 'Life Skills Studio', icon: '🧘', color: '#10B981', term: 'Term 3' },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-primary-50 via-white to-secondary-light overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Timeline Visual */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            {/* Academic Year Header */}
            <div className="text-center mb-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-primary/10 border border-primary/20"
              >
                <BookOpen size={20} className="text-primary" />
                <span className="text-base font-bold text-primary">Academic Year Roadmap</span>
              </motion.div>
            </div>

            {/* Timeline */}
            <div className="relative flex flex-col gap-8 pl-8">
              {/* Vertical Line */}
              <motion.div
                initial={{ height: 0 }}
                animate={inView ? { height: '100%' } : { height: 0 }}
                transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
                className="absolute left-3 top-0 w-0.5 bg-gradient-to-b from-blue-500 via-amber-500 to-green-500"
              />

              {timelineStudios.map((studio, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.2 }}
                  className="relative flex items-start gap-5"
                >
                  {/* Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.2, type: 'spring' }}
                    className="absolute -left-8 w-6 h-6 rounded-full border-4 border-white shadow-lg flex-shrink-0"
                    style={{ backgroundColor: studio.color }}
                  />

                  {/* Card */}
                  <div className="flex-1 ml-4 bg-white rounded-2xl p-6 shadow-lg shadow-gray-100/80 border border-gray-100 card-hover group">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-3xl">{studio.icon}</span>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider" style={{ color: studio.color }}>
                          {studio.term}
                        </p>
                        <h4 className="text-lg font-bold text-dark">{studio.name}</h4>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 flex-1 rounded-full bg-gray-100 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: '100%' } : { width: 0 }}
                          transition={{ duration: 1.5, delay: 0.8 + i * 0.3 }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: studio.color }}
                        />
                      </div>
                      <Award size={16} className="text-gray-400 group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            {/* Heading */}
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
    </section>
  );
};

export default StudioModel;
