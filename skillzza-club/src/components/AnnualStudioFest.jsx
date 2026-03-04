import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Presentation, Bot, Rocket, Music } from 'lucide-react';
import { annualFest, images } from '../data/content';

const festIcons = [Trophy, Presentation, Bot, Rocket, Music];
const festColors = ['#F59E0B', '#3B82F6', '#10B981', '#EC4899', '#8B5CF6'];

const AnnualStudioFest = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          src={images.studioFest}
          alt="Studio Fest"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/85 to-dark/95" />
      </div>

      {/* Sparkle particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3">
            {annualFest.heading}
          </h2>
          <p className="text-xl font-semibold text-primary-light">{annualFest.subheading}</p>
        </motion.div>

        {/* Fest Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {annualFest.items.map((item, i) => {
            const Icon = festIcons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, rotateX: 15 }}
                animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="glass rounded-2xl p-6 text-center h-full transition-all duration-300 hover:bg-white/15"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center"
                    style={{ backgroundColor: festColors[i] + '20' }}
                  >
                    <Icon size={28} style={{ color: festColors[i] }} />
                  </motion.div>

                  {/* Title */}
                  <p className="text-white font-semibold text-sm leading-snug">{item}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-block">
            <p className="text-xl sm:text-2xl text-white/90 font-medium italic leading-relaxed max-w-2xl mx-auto">
              "{annualFest.tagline}"
            </p>
            <div className="mt-4 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-primary to-accent-amber" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnnualStudioFest;
