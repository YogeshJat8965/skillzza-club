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
    <section className="relative py-8 lg:py-16 bg-[#F0EDF8]" ref={ref}>
      {/* CSS Animation for moving gradient */}
      <style>{`
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animated-gradient {
          background: linear-gradient(135deg, #6B21A8, #7C3AED, #8B5CF6, #A855F7, #7C3AED, #6B21A8);
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
      `}</style>
      
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
          <span className="inline-block px-8 py-3 rounded-full bg-red-100 text-red-600 text-base sm:text-lg font-bold uppercase tracking-widest">
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-6"
        >
          {challenge.stats.map((stat, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ 
                  y: -12, 
                  scale: 1.03,
                  transition: { duration: 0.3, ease: 'easeOut' }
                }}
                className="relative group"
              >
                {/* Subtle gradient border on hover */}
                <div className="absolute -inset-[1px] bg-gradient-to-br from-purple-500 via-violet-500 to-fuchsia-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Card with Animated Gradient Background */}
                <div 
                  className="relative rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full animated-gradient overflow-hidden"
                >
                  
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-purple-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    
                    {/* Icon with white background */}
                    <div className="mb-6">
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 shadow-md">
                        <Icon size={44} className="text-white" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Counter with white text */}
                    <motion.div 
                      className="text-6xl lg:text-7xl font-black mb-4 text-white"
                    >
                      <AnimatedCounter value={stat.value} inView={inView} />
                    </motion.div>

                    {/* Title */}
                    <p className="text-white font-semibold text-sm lg:text-base leading-tight px-2">
                      {stat.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Challenge;
