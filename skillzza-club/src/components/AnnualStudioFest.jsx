import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { annualFest } from '../data/content';

const AnnualStudioFest = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-[#F3E8FF] via-[#EDE9FE] to-[#E0E7FF]">
      {/* Animated floating blobs */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-400/15 to-pink-300/10 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 35, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-32 -left-32 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-amber-300/15 to-primary/12 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-1/4 w-[350px] h-[350px] rounded-full bg-gradient-to-r from-violet-300/10 to-indigo-200/10 blur-3xl"
      />

      {/* Floating confetti particles */}
      {[...Array(15)].map((_, i) => {
        const colors = ['#8B5CF6', '#F59E0B', '#EC4899', '#10B981', '#3B82F6'];
        const size = 4 + Math.random() * 6;
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${5 + Math.random() * 90}%`,
              top: `${5 + Math.random() * 90}%`,
              width: size,
              height: size,
              backgroundColor: colors[i % colors.length],
              opacity: 0.15,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.1, 0.25, 0.1],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: 'easeInOut',
            }}
          />
        );
      })}

      {/* Burst from top-left */}
      {[...Array(20)].map((_, i) => {
        const angle = (i * 18 + Math.random() * 15) * Math.PI / 180;
        const dist = 60 + Math.random() * 180;
        const colors = ['#8B5CF6', '#F59E0B', '#EC4899', '#10B981', '#3B82F6', '#6366F1', '#A855F7', '#F472B6', '#FBBF24', '#34D399'];
        return (
          <motion.div
            key={`burst-l-${i}`}
            className="absolute rounded-full"
            style={{
              left: 0,
              top: 0,
              width: 4 + Math.random() * 6,
              height: 4 + Math.random() * 6,
              backgroundColor: colors[i % colors.length],
            }}
            animate={{
              x: [0, Math.cos(angle) * dist, Math.cos(angle) * dist * 1.3],
              y: [0, Math.sin(angle) * dist, Math.sin(angle) * dist * 1.5 + 50],
              opacity: [0, 0.6, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 1,
              repeat: Infinity,
              delay: i * 0.1,
              ease: 'easeOut',
              repeatDelay: 1.5,
            }}
          />
        );
      })}

      {/* Burst from top-right */}
      {[...Array(20)].map((_, i) => {
        const angle = (100 + i * 18 + Math.random() * 15) * Math.PI / 180;
        const dist = 60 + Math.random() * 180;
        const colors = ['#F59E0B', '#8B5CF6', '#10B981', '#EC4899', '#3B82F6', '#A855F7', '#6366F1', '#F472B6', '#FBBF24', '#34D399'];
        return (
          <motion.div
            key={`burst-r-${i}`}
            className="absolute rounded-full"
            style={{
              right: 0,
              top: 0,
              width: 4 + Math.random() * 6,
              height: 4 + Math.random() * 6,
              backgroundColor: colors[i % colors.length],
            }}
            animate={{
              x: [0, Math.cos(angle) * dist, Math.cos(angle) * dist * 1.3],
              y: [0, Math.sin(angle) * dist, Math.sin(angle) * dist * 1.5 + 50],
              opacity: [0, 0.6, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 1,
              repeat: Infinity,
              delay: 0.8 + i * 0.1,
              ease: 'easeOut',
              repeatDelay: 1.5,
            }}
          />
        );
      })}

      {/* Dot grid pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle, rgba(124,58,237,0.05) 1.5px, transparent 1.5px)',
        backgroundSize: '36px 36px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark mb-3">
            {annualFest.heading}
          </h2>
          <p className="text-xl font-semibold text-primary">{annualFest.subheading}</p>
        </motion.div>

        {/* Fest Cards — StudioCard style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {annualFest.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer card-hover shadow-lg shadow-primary/5"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary-light transition-colors duration-300">
                  {item.name}
                </h3>
                <div className="w-12 h-1 rounded-full bg-gradient-to-r from-primary to-accent-amber transform origin-left transition-all duration-500 group-hover:w-20" />
              </div>

              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/50 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-block">
            <p className="text-xl sm:text-2xl text-gray-700 font-medium italic leading-relaxed max-w-4xl mx-auto sm:whitespace-nowrap">
              "{annualFest.tagline}"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnnualStudioFest;


