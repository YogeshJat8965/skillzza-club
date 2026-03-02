import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { AlertTriangle, Target, BarChart3, Globe2, TrendingUp } from 'lucide-react';
import { challenge } from '../data/content';

const icons = [AlertTriangle, Target, BarChart3, Globe2, TrendingUp];

const AnimatedCounter = ({ value, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
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
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

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
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-600 text-xs font-bold uppercase tracking-widest">
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
          className="flex flex-wrap justify-center gap-6 lg:gap-8"
        >
          {challenge.stats.map((stat, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative rounded-2xl bg-white p-8 shadow-lg shadow-gray-200/50 card-hover border border-gray-100 group overflow-hidden w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)]"
              >
                {/* Accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ backgroundColor: stat.color }}
                />

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: stat.color + '15' }}
                >
                  <Icon size={24} style={{ color: stat.color }} />
                </div>

                {/* Counter */}
                <div
                  className="text-5xl font-black mb-3"
                  style={{ color: stat.color }}
                >
                  <AnimatedCounter value={stat.value} inView={inView} />
                </div>

                {/* Title */}
                <p className="text-gray-700 font-semibold text-base leading-snug">
                  {stat.title}
                </p>

                {/* Progress Bar */}
                <div className="mt-5 w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${stat.value}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay: 0.3 + i * 0.15, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: stat.color }}
                  />
                </div>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"
                  style={{ backgroundColor: stat.color }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Challenge;
