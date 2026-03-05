import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { GraduationCap, Compass, ChartNoAxesCombined, Globe2, Rocket } from 'lucide-react';
import { challenge } from '../data/content';

const icons = [GraduationCap, Compass, ChartNoAxesCombined, Globe2, Rocket];

const AnimatedCounter = ({ value, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) {
      setCount(0);
      return;
    }
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span>{count}%</span>;
};

const Challenge = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="relative py-24 lg:py-32 bg-[#F0EDF8]" ref={ref}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, #C4B5E2 1px, transparent 0)',
        backgroundSize: '48px 48px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <span className="inline-block px-6 py-2.5 rounded-full bg-red-100 text-red-600 text-sm font-bold uppercase tracking-widest">
            {challenge.label}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-dark mb-16 max-w-3xl mx-auto"
        >
          {challenge.heading}
        </motion.h2>

        {/* Stat Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-wrap justify-center gap-8 lg:gap-10"
        >
          {challenge.stats.map((stat, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex flex-col items-center text-center group w-full sm:w-[calc(50%-16px)] lg:w-[calc(20%-32px)] min-w-[160px]"
              >
                {/* Icon */}
                <div className="flex items-center justify-center mb-4">
                  <Icon size={48} className="text-[#7C3AED]" strokeWidth={1.5} />
                </div>

                {/* Counter */}
                <div className="text-4xl sm:text-5xl font-black text-[#7C3AED] mb-2">
                  <AnimatedCounter value={stat.value} inView={inView} />
                </div>

                {/* Title */}
                <p className="text-gray-600 font-medium text-sm sm:text-[15px] leading-snug max-w-[200px]">
                  {stat.title}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Challenge;
