import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, ChevronUp } from 'lucide-react';
import { studioCategories } from '../data/content';

const INITIAL_VISIBLE = 6;

const categoryColors = {
  STEM: 'from-blue-500 to-cyan-400',
  Humanities: 'from-amber-500 to-orange-400',
  'Creative Arts': 'from-pink-500 to-rose-400',
  'Life Skills': 'from-green-500 to-emerald-400',
};

const categoryBg = {
  STEM: 'bg-blue-500/20 text-blue-300',
  Humanities: 'bg-amber-500/20 text-amber-300',
  'Creative Arts': 'bg-pink-500/20 text-pink-300',
  'Life Skills': 'bg-green-500/20 text-green-300',
};

const StudioCard = ({ studio, i, inView }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: 0.1 + (i % 3) * 0.08 }}
    className="group relative rounded-2xl overflow-hidden cursor-pointer card-hover bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
  >
    {/* Image */}
    <div className="relative h-56 overflow-hidden">
      <img
        src={studio.image}
        alt={studio.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />

      {/* Category Tag */}
      <div className="absolute top-4 right-4">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryBg[studio.category]}`}>
          {studio.category}
        </span>
      </div>
    </div>

    {/* Content - White Space Below Image */}
    <div className="p-6 bg-white">
      <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors duration-300">
        {studio.name}
      </h3>
      <div className="w-12 h-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transform origin-left transition-all duration-500 group-hover:w-20" />
    </div>

    {/* Hover border glow */}
    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/50 transition-colors duration-500 pointer-events-none" />
  </motion.div>
);

const StudioCategories = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [showAll, setShowAll] = useState(false);

  const visibleStudios = studioCategories.studios.slice(0, INITIAL_VISIBLE);
  const hiddenStudios = studioCategories.studios.slice(INITIAL_VISIBLE);

  return (
    <section id="studios" className="relative py-24 lg:py-32 bg-[#D8D4FD] overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 blob animate-float-slow" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-300/8 blob animate-float" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #976EDF 1px, transparent 0)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-dark mb-4"
        >
          {studioCategories.heading}
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-500 text-center mb-16 max-w-2xl mx-auto"
        >
          {studioCategories.subheading}
        </motion.p>

        {/* Studios Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Always-visible cards */}
          {visibleStudios.map((studio, i) => (
            <StudioCard key={i} studio={studio} i={i} inView={inView} />
          ))}

          {/* Expandable cards */}
          <AnimatePresence>
            {showAll && hiddenStudios.map((studio, i) => (
              <motion.div
                key={`hidden-${i}`}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <StudioCard studio={studio} i={i} inView={true} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-14"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(!showAll)}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-bold text-base shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow duration-300 btn-glow"
          >
            {showAll ? 'Show Less' : studioCategories.cta}
            {showAll ? (
              <ChevronUp size={18} className="transition-transform" />
            ) : (
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            )}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default StudioCategories;
